import { Command } from "commander";
import { db } from "./lib/firebase/admin";
import { User } from "./user";

const program = new Command();

program
  .option('-u, --userId <ids...>', 'User IDs')
  .parse(process.argv);

const options = program.opts();
const userIds = options.userId ? options.userId : [];

async function listQuestionStatus(userIds: string[]): Promise<void> {
  try {
    const usersRef = db.collection('users');
    const snapshot = userIds.length === 0
      ? await usersRef.get() 
      : await usersRef.where('id', 'in', userIds).get();
    if (snapshot.empty) {
      console.log(`No users found.`);
      return;
    }

    const data = snapshot.docs.map(doc => doc.data() as User);
    const jsonOutput = JSON.stringify(data, null, 2);
    console.log(jsonOutput);

  } catch (error) {
    console.error('Error listing question status:', error);
  }
}

listQuestionStatus(userIds);
