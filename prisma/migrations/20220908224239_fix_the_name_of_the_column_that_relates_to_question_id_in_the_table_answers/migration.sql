/*
  Warnings:

  - You are about to drop the column `questionNumber` on the `answers` table. All the data in the column will be lost.
  - Added the required column `questionId` to the `answers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_questionNumber_fkey";

-- AlterTable
ALTER TABLE "answers" DROP COLUMN "questionNumber",
ADD COLUMN     "questionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
