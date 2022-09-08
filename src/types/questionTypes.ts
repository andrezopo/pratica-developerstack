import { questions } from "@prisma/client";

export type question = Omit<questions, "id">;
