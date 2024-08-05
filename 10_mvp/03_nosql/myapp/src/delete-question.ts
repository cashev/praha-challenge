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
    const batch = db.batch();
    snapshot.docs.forEach(doc => {
      const userData = doc.data();
      const questions = userData.questions;
      if (!questions) {
        return;
      }
      const questionIndex = questions.findIndex((question: any) => question.id === questionId);
      if (questionIndex !== -1) {
        questions.splice(questionIndex, 1);
        batch.update(doc.ref, { questions });
      }
    });

    await batch.commit();
    console.log('Question deleted successfully');
  } catch (error) {
    console.error('Error deleting question:', error);
  }
}

deleteQuestion(questionId);
