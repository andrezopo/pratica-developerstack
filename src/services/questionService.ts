// TODO
import {
  getAllQuestions,
  getQuestionById,
  insertQuestion,
} from "../repositories/questionRepository";
import { question } from "../types/questionTypes";

export async function createQuestion(question: question) {
  await insertQuestion(question);
  return;
}

export async function get() {
  return await getAllQuestions();
}

export async function getById(id: number) {
  return await getQuestionById(id);
}
