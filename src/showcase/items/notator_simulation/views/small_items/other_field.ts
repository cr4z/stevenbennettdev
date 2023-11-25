export type OtherField = {
  name: string;
  status: OtherFieldStatus;
};

export type OtherFieldStatus = {
  unsaveable: boolean;
  userFeedback: string | null;
};
