var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
    relative_protocol_ids: 0,
    protocol_ids: 1,
    implementation_ids: 2
};

ChainTypes.operations = {
    vote_for_review: 0,

    transfer: 1,
    transfer_to_common_tokens: 2,
    withdraw_common_tokens: 3,

    account_create: 4,
    account_update: 5,

    witness_update: 6,
    account_witness_vote: 7,
    account_witness_proxy: 8,

    set_withdraw_common_tokens_route: 9,

    request_account_recovery: 10,
    recover_account: 11,
    change_recovery_account: 12,

    // DEIP native operations
    create_discipline_supply: 13,
    create_research_group: 14,
    create_proposal: 15,
    vote_proposal: 16,
    make_review: 17,
    contribute_to_token_sale: 18,
    approve_research_group_invite: 19,
    reject_research_group_invite: 20,
    transfer_research_tokens_to_research_group: 21,
    set_expertise_tokens: 22,
    research_update: 23,
    create_vesting_balance: 24,
    withdraw_vesting_balance: 25,
    transfer_research_tokens: 26,
    delegate_expertise: 27,
    revoke_expertise_delegation: 28,
    create_expertise_allocation_proposal: 29,
    vote_for_expertise_allocation_proposal: 30,
    accept_research_token_offer: 31,
    reject_research_token_offer: 32,
    create_grant_operation: 33,
    create_grant_application: 34,

    // make_review_for_application: 35,
    // approve_grant_application: 36,
    // reject_grant_application: 37,
    // create_funding: 38,
    // approve_funding: 39,
    // reject_funding: 40,
    // create_funding_withdrawal_request: 41,
    // approve_funding_withdrawal_request: 42,
    // reject_funding_withdrawal_request: 43,
    // approve_funding_milestone: 44,
    // reject_funding_milestone: 45,
    // create_organisation: 46,
    // certify_funding_withdrawal_request: 47,
    // create_asset: 48,
    // issue_asset_backed_tokens: 49,
    // pay_funding_withdrawal_request: 50,

    add_member_to_research: 35,
    exclude_member_from_research: 36,
    create_nda_contract: 37,
    sign_nda_contract: 38,
    decline_nda_contract: 39,
    close_nda_contract: 40,
    create_request_by_nda_contract: 41,
    fulfill_request_by_nda_contract: 42,

    // virtual operations
    fill_common_tokens_withdraw: 43,
    shutdown_witness: 44,
    hardfork: 45,
    producer_reward: 46
};

//types.hpp
ChainTypes.object_type = {
    "null": 0,
    base: 1,
};