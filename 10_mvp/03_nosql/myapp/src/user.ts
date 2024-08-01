import { Question } from "./question";

export interface User {
  id: string;
  name: string;
  questions: Question[];
}
