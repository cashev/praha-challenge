import { Command } from "commander";
import { db } from "./lib/firebase/admin";
import { User } from "./user";
import { QuestionStatus } from "./question";


const program = new Command();

program
  .argument('<userId>', 'User ID')
  .argument('<questionId>', 'Question ID')
  .parse(process.argv);

const userId = program.args[0];
const questionId = program.args[1];


async function completeQuestion(userId: string, questionId: string): Promise<void> {
  try {
    const userRef = db.collection('users').doc(userId);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      console.log(`User with id: ${userId} does not exist.`);
      return;
    }

    const userData = userDoc.data() as User;
    const questions = userData.questions;
    const questionIndex = questions.findIndex(question => question.id === questionId && question.status === QuestionStatus.Yet);
    if (questionIndex === -1) {
      console.log(`Question with id: "${questionId}" not found or already completed.`);
      return;
    }

    questions[questionIndex].status = QuestionStatus.Done;
    await userRef.update({ questions });
    console.log(`User with id: "${userId}", Question with id: "${questionId}" status updated to ${QuestionStatus.Done} successfully.`);
  } catch (error) {
    console.error('Error completing question:', error);
  }
}

completeQuestion(userId, questionId);
