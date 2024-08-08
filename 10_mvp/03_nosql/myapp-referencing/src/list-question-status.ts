import { Command } from "commander";
import { db } from "./lib/admin";
import { Question } from "./question";
import { User } from "./user";

const program = new Command();

program
  .option('-u, --userId <ids...>', 'User IDs')
  .parse(process.argv);

const options = program.opts();
const userIds = options.userId ? options.userId : [];

interface UserData {
  id: string;
  name: string;
  questions: {
    id: string;
    title: string;
    description: string;
    status: string;
  }[];
}

async function listQuestionStatus(userIds: string[]): Promise<void> {
  try {
    const data = await getUserAndQuestion(userIds);
    const jsonOutput = JSON.stringify(data, null, 2);
    console.log(jsonOutput);
  } catch (error) {
    console.error('Error listing question status:', error);
  }
}

async function getUserAndQuestion(userIds: string[]): Promise<UserData[]> {
  const usersRef = db.collection('users');
  const snapshot = userIds.length === 0
    ? await usersRef.get()
    : await usersRef.where('userId', 'in', userIds).get();
  if (snapshot.empty) {
    throw new Error('No users found.');
  }

  const users = snapshot.docs.map(doc => doc.data() as User);
  const questionRefs = users.map(user => user.questions.map(question => question.questionRef)).flat();

  const questionSnapshots = await db.getAll(...questionRefs);
  const map = new Map<string, Question>();
  questionSnapshots.forEach(snapshot => {
    const question = snapshot.data() as Question;
    map.set(snapshot.id, question);
  });

  return users.map(user => {
    return {
      id: user.userId,
      name: user.name,
      questions: user.questions.map(questionStatus => {
        const question = map.get(questionStatus.questionRef.id);
        if (!question) {
          throw new Error(`Question not found: ${questionStatus.questionRef.id}`);
        }
        return {
          id: question.questionId,
          title: question.title,
          description: question.description,
          status: questionStatus.status,
        };
      }),
    };
  });
}

listQuestionStatus(userIds);
