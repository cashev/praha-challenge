import { Command } from "commander";
import { db } from "./lib/firebase/admin";

const program = new Command();

program
  .argument('<questionId>', 'Question ID')
  .parse(process.argv);

const questionId = program.args[0];

async function deleteQuestion(questionId: string): Promise<void> {
  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();
    const deletePromises = snapshot.docs.map(async doc => {
      const userData = doc.data();
      const questions = userData.questions;
      if (!questions) {
        return;
      }
      const questionIndex = questions.findIndex((question: any) => question.id === questionId);
      if (questionIndex === -1) {
        return;
      }
      questions.splice(questionIndex, 1);
      await doc.ref.update({ questions });
    });
    await Promise.all(deletePromises);
    console.log('Question deleted successfully');
  } catch (error) {
    console.error('Error deleting question:', error);
  }
}

deleteQuestion(questionId);
