import { prisma } from "../config/database";
import { answer } from "../types/answerTypes";

// TODO

export async function insertAnswer(answer: answer) {
  await prisma.answers.create({ data: answer });
  return;
}
