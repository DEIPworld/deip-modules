import { createEnum } from '@deip/toolbox';

const RESEARCH_TYPES = createEnum({
  ANNOUNCEMENT: 1,
  FINAL_RESULT: 2,
  MILESTONE_ARTICLE: 3,
  MILESTONE_BOOK: 4,
  MILESTONE_CHAPTER: 5,
  MILESTONE_CODE: 6,
  MILESTONE_CONFERENCE_PAPER: 7,
  MILESTONE_COVER_PAGE: 8,
  MILESTONE_DATA: 9,
  MILESTONE_EXPERIMENT_FINDINGS: 10,
  MILESTONE_METHOD: 11,
  MILESTONE_NEGATIVE_RESULTS: 12,
  MILESTONE_PATENT: 13,
  MILESTONE_POSTER: 14,
  MILESTONE_PREPRINT: 15,
  MILESTONE_PRESENTATION: 16,
  MILESTONE_RAW_DATA: 17,
  MILESTONE_RESEARCH_PROPOSAL: 18,
  MILESTONE_TECHNICAL_REPORT: 19,
  MILESTONE_THESIS: 20
});

const RESEARCH_APPLICATION_STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  DELETED: "deleted"
}

export default RESEARCH_APPLICATION_STATUS;

export {
  RESEARCH_TYPES,
  RESEARCH_APPLICATION_STATUS
};
