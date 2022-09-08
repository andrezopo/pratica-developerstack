// TODO
import { prisma } from "../config/database";
import { insertAnswer } from "../repositories/answerRepository";
import { answer } from "../types/answerTypes";

export async function createAnswer(answer: answer) {
  await insertAnswer(answer);
  return;
}
