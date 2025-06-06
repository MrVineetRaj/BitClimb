/*
  Warnings:

  - You are about to drop the column `submissionId` on the `ProblemsSolved` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProblemsSolved" DROP CONSTRAINT "ProblemsSolved_submissionId_fkey";

-- AlterTable
ALTER TABLE "ProblemsSolved" DROP COLUMN "submissionId";
