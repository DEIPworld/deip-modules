import { APP_CMD } from '@deip/constants';
import { assert } from '@deip/toolbox';
import ProtocolCmd from '../base/ProtocolCmd';

/**
 * Transfer non-fungible token command
 * @extends ProtocolCmd
 */
class TransferNonFungibleTokenCmd extends ProtocolCmd {
  /**
   * Transfer non-fungible token
   * @param {Object} cmdPayload
   * @param {string} cmdPayload.from
   * @param {string} cmdPayload.to
   * @param {string} cmdPayload.classId
   * @param {string} cmdPayload.instanceId
   */
  constructor(cmdPayload) {
    const {
      from,
      to,
      classId,
      instanceId
    } = cmdPayload;

    assert(!!from, "'from' is required");
    assert(!!to, "'to' is required");
    assert(!!classId, "NFT 'classId' is required");
    assert(!!instanceId && !Number.isNaN(instanceId), "NFT 'instanceId' is required");

    super(APP_CMD.TRANSFER_NFT, cmdPayload);
  }
}

export default TransferNonFungibleTokenCmd;
