import { Request, Response } from "express";
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const { askedBy, question }: { askedBy: string; question: string } = req.body;
  questionService.createQuestion({ askedBy, question });
  res.status(201).send("Question created succesfully");
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
  const { answeredBy, answer }: { answeredBy: string; answer: string } =
    req.body;
  const { id } = req.params;
  const questionId: number = Number(id);
  await answerService.createAnswer({ answeredBy, answer, questionId });
  res.status(201).send("Answer sent succesfully");
}

export async function get(req: Request, res: Response) {
  // TODO
  const questions = await questionService.get();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  // TODO
  const { id } = req.params;
  const questionId: number = Number(id);

  const question = await questionService.getById(questionId);
  res.status(200).send(question);
}
