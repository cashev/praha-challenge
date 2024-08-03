import { DocumentSnapshot } from "firebase-admin/firestore";
import { db } from "./lib/admin";
import { Question, QuestionStatus } from "./question";


async function save(users: User[], questions: Question[]): Promise<void> {
  try {
    const questionsRef = db.collection("questions");
    const batch = db.batch();
    const map = new Map<string, DocumentSnapshot>();
    for (const question of questions) {
      const questionRef = questionsRef.doc();
      batch.set(questionRef, question);
      const questionDoc = await questionRef.get();
      map.set(question.questionId, questionDoc);
    }

    for (const user of users) {
      const userRef = db.collection("users").doc();
      const userQuestions = user.questionStatus.map(questionStatus => {
        const questionDoc = map.get(questionStatus.question.questionId);
        return {
          questionRef: questionDoc ? questionDoc.ref : null,
          status: questionStatus.status,
        };
      });
      batch.set(userRef, {
        userId: user.userId,
        name: user.name,
        questions: userQuestions,
      });
    }
    await batch.commit();
    console.log(`Users and Questions added successfully`);
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}

const newQuestion01: Question = {
  questionId: "1",
  title: "課題01",
  description: "課題01の詳細",
};

const newQuestion02: Question = {
  questionId: "2",
  title: "課題02",
  description: "課題02の詳細",
};

const newQuestion03: Question = {
  questionId: "3",
  title: "課題03",
  description: "課題03の詳細",
};

interface User {
  userId: string;
  name: string;
  questionStatus: {
    question: Question,
    status: QuestionStatus,
  }[];
}

const newUser01: User = {
  userId: "1",
  name: "テスト 一郎",
  questionStatus: [
    {
      question: newQuestion01,
      status: QuestionStatus.Yet,
    },
    {
      question: newQuestion02,
      status: QuestionStatus.Yet,
    },
    {
      question: newQuestion03,
      status: QuestionStatus.Yet,
    },
  ]
};

const newUser02: User = {
  userId: "2",
  name: "テスト 二郎",
  questionStatus: [
    {
      question: newQuestion01,
      status: QuestionStatus.Done,
    },
    {
      question: newQuestion02,
      status: QuestionStatus.Done,
    },
    {
      question: newQuestion03,
      status: QuestionStatus.Done,
    },
  ]
};

const newUser03: User = {
  userId: "3",
  name: "テスト 三郎",
  questionStatus: [
    {
      question: newQuestion01,
      status: QuestionStatus.Done,
    },
    {
      question: newQuestion02,
      status: QuestionStatus.Yet,
    },
    {
      question: newQuestion03,
      status: QuestionStatus.Yet,
    },
  ]
};

const users = [newUser01, newUser02, newUser03];
const questions = [newQuestion01, newQuestion02, newQuestion03];
save(users, questions);
