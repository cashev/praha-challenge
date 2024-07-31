import { db } from "./lib/firebase/admin";

interface Question {
  id: string;
  title: string;
  description: string;
  status: "未完了" | "完了";
}

interface User {
  name: string;
  questions: Question[];
}

async function addUserWithQuestions(user: User): Promise<void> {
  try {
    const userRef = db.collection('users').doc();
    await userRef.set({
      name: user.name,
      questions: user.questions
    });
    console.log(`User ${user.name} added successfully with ID: ${userRef.id}`);
  } catch (error) {
    console.error('Error adding user: ', error);
  }
}

const newUser01: User = {
  name: 'テスト 一郎',
  questions: [
    {
      id: '1',
      title: '課題01',
      description: '課題01の詳細',
      status: '未完了'
    },
    {
      id: '2',
      title: '課題02',
      description: '課題02の詳細',
      status: '未完了'
    }
  ]
};

const newUser02: User = {
  name: 'テスト 二郎',
  questions: [
    {
      id: '1',
      title: '課題01',
      description: '課題01の詳細',
      status: '完了'
    },
    {
      id: '2',
      title: '課題02',
      description: '課題02の詳細',
      status: '完了'
    }
  ]
};

const newUser03: User = {
  name: 'テスト 三郎',
  questions: [
    {
      id: '1',
      title: '課題01',
      description: '課題01の詳細',
      status: '完了'
    },
    {
      id: '2',
      title: '課題02',
      description: '課題02の詳細',
      status: '未完了'
    }
  ]
};

addUserWithQuestions(newUser01);
addUserWithQuestions(newUser02);
addUserWithQuestions(newUser03);
