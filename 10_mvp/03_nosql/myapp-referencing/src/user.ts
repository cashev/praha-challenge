import { DocumentReference } from "firebase-admin/firestore";

export enum Status {
  Yet = "未完了",
  Done = "完了",
}

export interface QuestionStatus {
  questionRef: DocumentReference,
  status: Status,
}

export interface User {
  userId: string;
  name: string;
  questions: QuestionStatus[];
}
