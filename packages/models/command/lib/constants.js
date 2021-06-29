import { createEnum } from '@deip/toolbox';


const APP_CMD = createEnum({
  CREATE_ACCOUNT: 1,
  UPDATE_ACCOUNT: 2,
  CREATE_PROJECT: 3,
  UPDATE_PROJECT: 4,
  DELETE_PROJECT: 5,
  JOIN_PROJECT_TEAM: 6,
  CREATE_PROPOSAL: 7,
  UPDATE_PROPOSAL: 8,
  DECLINE_PROPOSAL: 9,
  CREATE_ATTRIBUTE: 10,
  UPDATE_ATTRIBUTE: 11,
  DELETE_ATTRIBUTE: 12,
  LEAVE_PROJECT_TEAM: 13,
  CREATE_PROJECT_TOKEN_SALE: 14,
  CONTRIBUTE_PROJECT_TOKEN_SALE: 15
});


const APP_PROPOSAL = createEnum({
  PROJECT_PROPOSAL: 1,
  PROJECT_UPDATE_PROPOSAL: 2,
  PROJECT_CONTENT_PROPOSAL: 3,
  PROJECT_FUNDRASE_PROPOSAL: 4,
  TEAM_UPDATE_PROPOSAL: 5,
  PROJECT_INVITE_PROPOSAL: 6,
  PROJECT_LEAVE_PROPOSAL: 7,
  ASSET_TRANSFER_PROPOSAL: 8,
  EXPRESS_LICENSE_PROPOSAL: 9,
  ASSET_EXCHANGE_PROPOSAL: 10,
  PROJECT_NDA_PROPOSAL: 11,
  PROJECT_TOKEN_SALE_PROPOSAL: 12
});


export {
  APP_CMD,
  APP_PROPOSAL
}