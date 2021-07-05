import { proxydi } from '@deip/proxydi';
import { MultFormDataMsg } from '@deip/message-models';
import {
  UpdateAccountCmd
} from '@deip/command-models';
import { ChainService } from '@deip/chain-service';
import {
  Singleton,
  replaceFileWithName,
  createFormData,
  createHash
} from '@deip/toolbox';
import { UserHttp } from './UserHttp';

class UserService extends Singleton {
  userHttp = UserHttp.getInstance();

  proxydi = proxydi;

  updateUser(payload) {
    const env = this.proxydi.get('env');
    const {
      initiator: {
        privKey,
        username: updater
      },
      ...data
    } = payload;

    const {
      email,
      status,
      accountOwnerAuth,
      accountActiveAuth,
      memoKey
    } = data;

    const formData = createFormData(data);
    const attributes = replaceFileWithName(data.attributes);

    return ChainService.getInstanceAsync(env)
      .then((chainService) => {
        const txBuilder = chainService.getChainTxBuilder();

        return txBuilder.begin()
          .then(() => {
            const updateAccountCmd = new UpdateAccountCmd({
              isTeamAccount: false,
              entityId: updater,
              ownerAuth: accountOwnerAuth,
              activeAuth: accountActiveAuth,
              memoKey,
              description: createHash(attributes),
              attributes,
              email,
              status
            });

            txBuilder.addCmd(updateAccountCmd);
            return txBuilder.end();
          })
          .then((packedTx) => {
            packedTx.sign(privKey);
            const msg = new MultFormDataMsg(formData, packedTx.getPayload(), { 'entity-id': updater });
            return this.userHttp.updateUser(msg);
          });
      });
  }

  getUserInvites(username) {
    return this.userHttp.getInvitesByUser(username);
  }

  getUsers(usernames) {
    return this.userHttp.getUsers(usernames);
  }

  getUsersByTeam(teamId) {
    return this.userHttp.getUsersByTeam(teamId);
  }

  getUsersByTenant(tenantId) {
    return this.userHttp.getUsersByTenant(tenantId);
  }

  getUsersListing(query = {}) {
    return this.userHttp.getUsersListing(query);
  }

  // ONE

  getUser(username) {
    if (username.includes('@')) {
      return this.userHttp.getUserByEmail(username);
    }
    return this.userHttp.getUser(username);
  }
}

export {
  UserService
};
