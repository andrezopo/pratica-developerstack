// TODO
import { prisma } from "../config/database";
import { question } from "../types/questionTypes";
import { questions } from "@prisma/client";

export async function insertQuestion(question: question) {
  await prisma.questions.create({ data: question });
}

export async function getAllQuestions() {
  const questions: questions[] = await prisma.questions.findMany();
  return questions;
}

export async function getQuestionById(id: number) {
  const question = await prisma.questions.findUnique({
    where: { id },
    include: { answers: true },
  });
  return question;
}
