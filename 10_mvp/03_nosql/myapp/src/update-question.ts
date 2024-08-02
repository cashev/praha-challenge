import { Command } from "commander";
import { db } from "./lib/firebase/admin";
import { Question } from "./question";

const program = new Command();

program
  .argument('<questionId>', 'Question ID')
  .argument('<title>', 'Question Title')
  .argument('<description>', 'Question Description')
  .parse(process.argv);

const questionId = program.args[0];
const title = program.args[1];
const description = program.args[2];

async function updateQuestion(questionId: string, title: string, description: string): Promise<void> {
  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();
    const updatePromises = snapshot.docs.map(async doc => {
      const userData = doc.data();
      const questions = userData.questions as Question[];
      if (!userData.questions) {
        return;
      }
      const questionIndex = questions.findIndex(question => question.id === questionId);
      if (questionIndex === -1) {
        return;
      }
      questions[questionIndex].title = title;
      questions[questionIndex].description = description;
      await doc.ref.update({ questions });
    });

    await Promise.all(updatePromises);
    console.log('Question updated successfully');
  } catch (error) {
    console.error('Error updating question:', error);
  }
}

updateQuestion(questionId, title, description);
