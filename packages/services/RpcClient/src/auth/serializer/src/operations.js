// This file is merge updated from steemd's js_operation_serializer program.
/*

./js_operation_serializer |
sed 's/void/future_extensions/g'|
sed 's/steemit_protocol:://g'|
sed 's/14static_variantIJNS_12fixed_stringINSt3__14pairIyyEEEEEEE/string/g'|
sed 's/steemit_future_extensions/future_extensions/g'|
sed 's/steemit_protocol_//g' > tmp.coffee

*/
// coffee tmp.coffee # fix errors until you see: `ChainTypes is not defined`

/*

   remove these 7 lines from tmp.coffee:

static_variant [
    pow2
    equihash_pow
] = static_variant [
    pow2
    equihash_pow
]

*/

// npm i -g decaffeinate
// decaffeinate tmp.coffee

// Merge tmp.js - See "Generated code follows" below

import types from "./types"
import SerializerImpl from "./serializer"

const {
    //id_type,
    //varint32, uint8, fixed_array, object_id_type, vote_id, address,
    uint8,
    int16,
    int64,
    uint16,
    uint32,
    uint64,
    string,
    string_binary,
    bytes,
    bool,
    array,
    // protocol_id_type,
    static_variant,
    map,
    set,
    public_key,
    time_point_sec,
    optional,
    asset,
} = types

const future_extensions = types.void
const hardfork_version_vote = types.void
const version = types.void

// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
const operation = static_variant();
module.exports.operation = operation;

// For module.exports
const Serializer = function (operation_name, serilization_types_object) {
    const s = new SerializerImpl(operation_name, serilization_types_object);
    return module.exports[operation_name] = s;
}

const placeholder1 = new Serializer("placeholder1", {});
const placeholder2 = new Serializer("placeholder2", {});

const invitee = new Serializer("invitee", {
    account: string,
    rgt: uint32,
    notes: string
});

const subawardee = new Serializer("subawardee", {
    subaward_number: string,
    subaward: asset,
    subawardee: string,
    source: string,
    research_id: int64
});

// Custom-types after Generated code

// ##  Generated code follows
// -------------------------------
/*
When updating generated code (fix closing notation)
Replace:  var operation = static_variant([
with:     operation.st_operations = [

Delete (these are custom types instead):
let public_key = new Serializer( 
    "public_key",
    {key_data: bytes(33)}
);

let asset = new Serializer( 
    "asset",
    {amount: int64,
    symbol: uint64}
);

Replace: authority.prototype.account_authority_map
With: map((string), (uint16))
*/
const signed_transaction = new Serializer("signed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))
});

const signed_block = new Serializer("signed_block", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,
        version,
        hardfork_version_vote
    ])),
    witness_signature: bytes(65),
    transactions: array(signed_transaction)
});

const block_header = new Serializer("block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,
        version,
        hardfork_version_vote
    ]))
});

const signed_block_header = new Serializer("signed_block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,
        version,
        hardfork_version_vote
    ])),
    witness_signature: bytes(65)
});

const transfer = new Serializer("transfer", {
    from: string,
    to: string,
    amount: asset,
    memo: string
});

const authority = new Serializer("authority", {
    weight_threshold: uint32,
    account_auths: map((string), (uint16)),
    key_auths: map((public_key), (uint16))
});

const account_create = new Serializer("account_create", {
    fee: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string
});

const account_update = new Serializer("account_update", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memo_key: public_key,
    json_metadata: string
});

const chain_properties = new Serializer("chain_properties", {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16
});

const witness_update = new Serializer("witness_update", {
    owner: string,
    url: string,
    block_signing_key: public_key,
    props: chain_properties,
    fee: asset
});

const account_witness_vote = new Serializer("account_witness_vote", {
    account: string,
    witness: string,
    approve: bool
});

const account_witness_proxy = new Serializer("account_witness_proxy", {
    account: string,
    proxy: string
});

const pow = new Serializer("pow", {
    worker: public_key,
    input: bytes(32),
    signature: bytes(65),
    work: bytes(32)
});

const set_withdraw_common_tokens_route = new Serializer("set_withdraw_common_tokens_route", {
    from_account: string,
    to_account: string,
    percent: uint16,
    auto_common_token: bool
});

const challenge_authority = new Serializer("challenge_authority", {
    challenger: string,
    challenged: string,
    require_owner: bool
});

const request_account_recovery = new Serializer("request_account_recovery", {
    recovery_account: string,
    account_to_recover: string,
    new_owner_authority: authority,
    extensions: set(future_extensions)
});

const recover_account = new Serializer("recover_account", {
    account_to_recover: string,
    new_owner_authority: authority,
    recent_owner_authority: authority,
    extensions: set(future_extensions)
});

const change_recovery_account = new Serializer("change_recovery_account", {
    account_to_recover: string,
    new_recovery_account: string,
    extensions: set(future_extensions)
});

// DEIP native operations

const base_research_group_management_model = {
    version: string
}

const dao_voting_research_group_management_model_v1_0_0 = new Serializer("dao_voting_research_group_management_model_v1_0_0",
  Object.assign({}, base_research_group_management_model, {
    default_quorum: uint32,
    action_quorums: map((uint16), (uint32))
  })
);

const dao_multisig_research_group_management_model_v1_0_0 = new Serializer("dao_multisig_research_group_management_model_v1_0_0",
  Object.assign({}, base_research_group_management_model, {
    default_threshold: uint32,
    action_thresholds: map((uint16), (uint32))
  })
);

const centralized_research_group_management_model_v1_0_0 = new Serializer("centralized_research_group_management_model_v1_0_0",
  Object.assign({}, base_research_group_management_model, {
    heads: set(string)
  })
);

const base_organizational_contract = {
    version: string
}

const organization_division_contract_v1_0_0 = new Serializer("organization_division_contract_v1_0_0",
  Object.assign({}, base_organizational_contract, {
    organization_id: int64,
    unilateral_termination_allowed: bool,
    organization_agents: set(invitee),
    notes: string
  })
);

const create_research_group = new Serializer("create_research_group", {
    creator: string,
    name: string,
    permlink: string,
    description: string,
    type: uint32,
    details: array(static_variant([
      dao_voting_research_group_management_model_v1_0_0,
      dao_multisig_research_group_management_model_v1_0_0,
      centralized_research_group_management_model_v1_0_0,
      organization_division_contract_v1_0_0
    ])),
    is_created_by_organization: bool,
    invitees: set(invitee)
});

const create_expertise_allocation_proposal = new Serializer("create_expertise_allocation_proposal", {
    claimer: string,
    discipline_id: int64,
    description: string
});

const vote_for_expertise_allocation_proposal = new Serializer("vote_for_expertise_allocation_proposal", {
    proposal_id: int64,
    voter: string,
    voting_power: int64
});

const accept_research_token_offer = new Serializer("accept_research_token_offer", {
    offer_research_tokens_id: int64,
    buyer: string
});

const reject_research_token_offer = new Serializer("reject_research_token_offer", {
    offer_research_tokens_id: int64,
    buyer: string
});

const create_proposal = new Serializer("create_proposal", {
    creator: string,
    research_group_id: int64,
    data: string,
    action: uint16,
    expiration_time: time_point_sec
});

const vote_proposal = new Serializer("vote_proposal", {
    voter: string,
    proposal_id: int64,
    research_group_id: int64
});

const base_assessment_model = {
  version: string
}

const binary_scoring_assessment_model_v1_0_0 = new Serializer("binary_scoring_assessment_model_v1_0_0",
  Object.assign({}, base_assessment_model, {
    is_positive: bool
  })
);

const multicriteria_scoring_assessment_model_v1_0_0 = new Serializer("multicriteria_scoring_assessment_model_v1_0_0",
  Object.assign({}, base_assessment_model, {
    scores: map((uint16), (uint16))
  })
);

const make_review = new Serializer("make_review", {
    author: string,
    research_content_id: int64,
    content: string,
    weight: uint16,
    assessment_model: static_variant([
      binary_scoring_assessment_model_v1_0_0,
      multicriteria_scoring_assessment_model_v1_0_0
    ]),
    extensions: set(future_extensions)
});

const contribute_to_token_sale = new Serializer("contribute_to_token_sale", {
    research_token_sale_id: int64,
    owner: string,
    amount: asset
});

const approve_research_group_invite = new Serializer("approve_research_group_invite", {
    "research_group_invite_id": int64,
    "owner": string
});

const reject_research_group_invite = new Serializer("reject_research_group_invite", {
    "research_group_invite_id": int64,
    "owner": string
});

const vote_for_review = new Serializer("vote_for_review", {
    "voter": string,
    "review_id": int64,
    "discipline_id": int64,
    "weight": int16
});

const transfer_research_tokens_to_research_group = new Serializer("transfer_research_tokens_to_research_group", {
    research_token_id: int64,
    research_id: int64,
    owner: string,
    amount: uint32
})

const research_update = new Serializer("research_update", {
    "research_id": int64,
    "title": string,
    "abstract": string,
    "permlink": string,
    "owner": string
})

const create_vesting_balance = new Serializer("create_vesting_balance", {
    "creator": string,
    "owner": string,
    "balance": asset,
    "vesting_duration_seconds": uint32,
    "vesting_cliff_seconds": uint32,
    "period_duration_seconds": uint32
});

const delegate_expertise = new Serializer("delegate_expertise", {
    "sender": string,
    "receiver": string,
    "discipline_id": int64
})

const revoke_expertise_delegation = new Serializer("revoke_expertise_delegation", {
    "sender": string,
    "receiver": string,
    "discipline_id": int64
})

const withdraw_vesting_balance = new Serializer("withdraw_vesting_balance", {
    "vesting_balance_id": int64,
    "owner": string,
    "amount": asset
})

const transfer_research_tokens = new Serializer("transfer_research_tokens", {
    research_id: int64,
    sender: string,
    receiver: string,
    amount: uint32
})

const transfer_to_common_tokens = new Serializer("transfer_to_common_tokens", {
    "from": string,
    "to": string,
    "amount": asset
});

const withdraw_common_tokens = new Serializer("withdraw_common_tokens", {
    "account": string,
    "total_common_tokens_amount": int64
});

const base_grant_contract_model = {
  version: string
}

const announced_application_window_contract_v1_0_0 = new Serializer("announced_application_window_contract_v1_0_0",
  Object.assign({}, base_grant_contract_model, {
    review_committee_id: int64,
    min_number_of_positive_reviews: uint16,
    min_number_of_applications: uint16,
    max_number_of_research_to_grant: uint16,
    start_date: time_point_sec,
    end_date: time_point_sec,
    additional_info: map((string), (string))
  })
);


const discipline_supply_announcement_contract_v1_0_0 = new Serializer("discipline_supply_announcement_contract_v1_0_0",
  Object.assign({}, base_grant_contract_model, {
    start_time: time_point_sec,
    end_time: time_point_sec,
    is_extendable: bool,
    content_hash: string,
    additional_info: map((string), (string))
  })
);

const funding_opportunity_announcement_contract_v1_0_0 = new Serializer("funding_opportunity_announcement_contract_v1_0_0",
  Object.assign({}, base_grant_contract_model, {
    organization_id: int64,
    review_committee_id: int64,
    funding_opportunity_number: string,
    award_ceiling: asset,
    award_floor: asset,
    expected_number_of_awards: uint16,
    open_date: time_point_sec,
    close_date: time_point_sec,
    officers: set(string),
    additional_info: map((string), (string))
  })
);

const create_grant = new Serializer("create_grant", {
    "grantor": string,
    "amount": asset,
    "target_disciplines": set(int64),
    "distribution_model": static_variant([
      announced_application_window_contract_v1_0_0,
      funding_opportunity_announcement_contract_v1_0_0,
      discipline_supply_announcement_contract_v1_0_0
    ]),
    "extensions": set(future_extensions)
});

const create_grant_application = new Serializer("create_grant_application", {
    "grant_id": int64,
    "research_id": int64,
    "creator": string,
    "application_hash": string
});

const make_review_for_application = new Serializer("make_review_for_application", {
    "author": string,
    "grant_application_id": int64,
    "is_positive": bool,
    "content": string,
    "weight": uint16
});

const approve_grant_application = new Serializer("approve_grant_application", {
    "grant_application_id": int64,
    "approver": string
});

const reject_grant_application = new Serializer("reject_grant_application", {
    "grant_application_id": int64,
    "rejector": string
});

const create_award = new Serializer("create_award", {
    "funding_opportunity_number": string,
    "award_number": string,
    "award": asset,
    "awardee": string,
    "research_id": int64,
    "university_id": int64,
    "university_overhead": uint32,
    "subawardees": array(subawardee),
    "creator": string,
    "extensions": set(future_extensions)
});

const approve_award = new Serializer("approve_award", {
    "award_number": string,
    "approver": string
});

const reject_award = new Serializer("reject_award", {
    "award_number": string,
    "rejector": string
});

const create_award_withdrawal_request = new Serializer("create_award_withdrawal_request", {
    "payment_number": string,
    "award_number": string,
    "subaward_number": optional(string),
    "requester": string,
    "amount": asset,
    "description": string,
    "attachment": string
});

const certify_award_withdrawal_request = new Serializer("certify_award_withdrawal_request", {
    "payment_number": string,
    "award_number": string,
    "subaward_number": optional(string),
    "certifier": string
});

const approve_award_withdrawal_request = new Serializer("approve_award_withdrawal_request", {
    "payment_number": string,
    "award_number": string,
    "subaward_number": optional(string),
    "approver": string
});

const reject_award_withdrawal_request = new Serializer("reject_award_withdrawal_request", {
    "payment_number": string,
    "award_number": string,
    "subaward_number": optional(string),
    "rejector": string
});

const pay_award_withdrawal_request = new Serializer("pay_award_withdrawal_request", {
    "payment_number": string,
    "award_number": string,
    "subaward_number": optional(string),
    "payer": string
});

const create_asset = new Serializer("create_asset", {
    "issuer": string,
    "symbol": string,
    "precision": uint8,
    "name": string,
    "description": string
});

const issue_asset = new Serializer("issue_asset", {
    "issuer": string,
    "amount": asset
});

const reserve_asset = new Serializer("reserve_asset", {
    "owner": string,
    "amount": asset
});

const create_nda_contract = new Serializer("create_nda_contract", {
  contract_creator: string,
  party_a: string,
  party_a_research_group_id: int64,
  party_b: string,
  party_b_research_group_id: int64,
  disclosing_party: set(string),
  title: string,
  contract_hash: string,
  start_date: optional(time_point_sec),
  end_date: time_point_sec
});

const sign_nda_contract = new Serializer("sign_nda_contract", {
  contract_id: int64,
  contract_signer: string,
  signature: string
});

const decline_nda_contract = new Serializer("decline_nda_contract", {
  contract_id: int64,
  decliner: string
});

const close_nda_contract = new Serializer("close_nda_contract", {
  contract_id: int64,
  closer: string
});

const create_request_by_nda_contract = new Serializer("create_request_by_nda_contract", {
  requester: string,
  encrypted_payload_hash: string,
  encrypted_payload_iv: string,
  contract_id: int64
});

const fulfill_request_by_nda_contract = new Serializer("fulfill_request_by_nda_contract", {
  grantor: string,
  encrypted_payload_encryption_key: string,
  proof_of_encrypted_payload_encryption_key: string,
  request_id: int64
});

const add_member_to_research = new Serializer("add_member_to_research", {});
const exclude_member_from_research = new Serializer("exclude_member_from_research", {});

// virtual operations

const fill_common_tokens_withdraw = new Serializer("fill_common_tokens_withdraw", {
    from_account: string,
    to_account: string,
    withdrawn: asset,
    deposited: asset
});

const create_subscription = new Serializer("create_subscription", {
    owner: string,
    agent: string,
    research_group_id: optional(int64),
    json_data: string
});

const adjust_subscription_extra_quota = new Serializer("adjust_subscription_extra_quota", {
    owner: string,
    agent: string,
    subscription_id: int64,
    json_data: string
});

const update_subscription = new Serializer("update_subscription", {
    owner: string,
    agent: string,
    subscription_id: int64,
    json_data: string
});

const shutdown_witness = new Serializer("shutdown_witness", {
    owner: string
});

const hardfork = new Serializer("hardfork", {
    hardfork_id: uint32
});

const producer_reward = new Serializer("producer_reward", {
    producer: string,
    common_tokens_amount: uint32
});

operation.st_operations = [
    vote_for_review, // 0

    transfer, // 1
    transfer_to_common_tokens, // 2
    withdraw_common_tokens, // 3

    account_create, // 4
    account_update, // 5

    witness_update, // 6
    account_witness_vote, // 7
    account_witness_proxy, // 8

    set_withdraw_common_tokens_route, // 9

    request_account_recovery, // 10
    recover_account, // 11
    change_recovery_account, // 12

    // DEIP native operations
    placeholder1, // 13
    create_research_group, // 14
    create_proposal, // 15
    vote_proposal, // 16
    make_review, // 17
    contribute_to_token_sale, // 18
    approve_research_group_invite,// 19
    reject_research_group_invite, // 20
    transfer_research_tokens_to_research_group, // 21
    placeholder2, // 22
    research_update, // 23 /* legacy */
    create_vesting_balance, // 24
    withdraw_vesting_balance, // 25
    transfer_research_tokens, // 26
    delegate_expertise, // 27
    revoke_expertise_delegation, // 28
    create_expertise_allocation_proposal, // 29
    vote_for_expertise_allocation_proposal, // 30
    accept_research_token_offer, // 31
    reject_research_token_offer, // 32
    create_grant, // 33
    create_grant_application, // 34
    make_review_for_application, // 35
    approve_grant_application, // 36
    reject_grant_application, // 37
    create_asset, // 38
    issue_asset, // 39
    reserve_asset, // 40
    create_award, // 41
    approve_award, // 42
    reject_award, // 43
    create_award_withdrawal_request, // 44
    certify_award_withdrawal_request, // 45
    approve_award_withdrawal_request, // 46
    reject_award_withdrawal_request, // 47
    pay_award_withdrawal_request, // 48

    /* === IP Ledger module ===
    add_member_to_research,
    exclude_member_from_research,
    create_nda_contract,
    sign_nda_contract,
    decline_nda_contract,
    close_nda_contract,
    create_request_by_nda_contract,
    fulfill_request_by_nda_contract,
    create_subscription,
    adjust_subscription_extra_quota,
    update_subscription,
    */

    // virtual operations
    fill_common_tokens_withdraw,
    shutdown_witness,
    hardfork,
    producer_reward
];

let transaction = new Serializer(
    "transaction", {
        ref_block_num: uint16,
        ref_block_prefix: uint32,
        expiration: time_point_sec,
        operations: array(operation),
        extensions: set(future_extensions)
    }
);

//# -------------------------------
//#  Generated code end  S T O P
//# -------------------------------

// Custom Types (do not over-write)

const encrypted_memo = new Serializer("encrypted_memo", {
    from: public_key,
    to: public_key,
    nonce: uint64,
    check: uint32,
    encrypted: string_binary
});
/*

// Make sure all tests pass

npm test

*/