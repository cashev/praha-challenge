import { Question } from "./question";

export interface User {
  name: string;
  questions: Question[];
}
