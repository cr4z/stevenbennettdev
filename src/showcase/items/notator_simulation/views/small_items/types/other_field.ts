export type OtherField = {
  name: string;
  status: OtherFieldStatus;
};

export type OtherFieldStatus = {
  savable: boolean;
  userFeedback: string;
};
