export enum QuestionStatus {
  Yet = "未完了",
  Done = "完了",
}

export interface Question {
  id: string;
  title: string;
  description: string;
  status: QuestionStatus;
}
