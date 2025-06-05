/*
  Warnings:

  - Added the required column `userId` to the `ProblemInProblemList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProblemInProblemList" ADD COLUMN     "userId" TEXT NOT NULL;
