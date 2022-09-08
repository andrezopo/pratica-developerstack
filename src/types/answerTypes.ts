import { answers } from "@prisma/client";

export type answer = Omit<answers, "id">;
