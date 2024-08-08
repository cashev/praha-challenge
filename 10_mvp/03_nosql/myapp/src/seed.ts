import { db } from "./lib/firebase/admin";
import { User } from "./user";
import { QuestionStatus } from "./question";

async function addUserWithQuestions(user: User): Promise<void> {
  try {
    const userRef = db.collection("users").doc();
    await userRef.set({
      id: user.id,
      name: user.name,
      questions: user.questions
    });
    console.log(`User ${user.name} added successfully with ID: ${userRef.id}`);
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}

const newUser01: User = {
  id: "1",
  name: "テスト 一郎",
  questions: [
    {
      id: "1",
      title: "課題01",
      description: "課題01の詳細",
      status: QuestionStatus.Yet,
    },
    {
      id: "2",
      title: "課題02",
      description: "課題02の詳細",
      status: QuestionStatus.Yet,
    }
  ]
};

const newUser02: User = {
  id: "2",
  name: "テスト 二郎",
  questions: [
    {
      id: "1",
      title: "課題01",
      description: "課題01の詳細",
      status: QuestionStatus.Done,
    },
    {
      id: "2",
      title: "課題02",
      description: "課題02の詳細",
      status: QuestionStatus.Done,
    }
  ]
};

const newUser03: User = {
  id: "3",
  name: "テスト 三郎",
  questions: [
    {
      id: "1",
      title: "課題01",
      description: "課題01の詳細",
      status: QuestionStatus.Done,
    },
    {
      id: "2",
      title: "課題02",
      description: "課題02の詳細",
      status: QuestionStatus.Yet,
    }
  ]
};

addUserWithQuestions(newUser01);
addUserWithQuestions(newUser02);
addUserWithQuestions(newUser03);
