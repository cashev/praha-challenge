export enum QuestionStatus {
  Yet = "未完了",
  Done = "完了",
}

export interface Question {
  questionId: string;
  title: string;
  description: string;
}
