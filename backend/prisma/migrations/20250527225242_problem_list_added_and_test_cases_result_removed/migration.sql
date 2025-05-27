/*
  Warnings:

  - You are about to drop the `TestCasesResult` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,problemId]` on the table `ProblemsSolved` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "TestCasesResult" DROP CONSTRAINT "TestCasesResult_submissionId_fkey";

-- DropTable
DROP TABLE "TestCasesResult";

-- CreateTable
CREATE TABLE "ProblemList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProblemList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProblemInProblemList" (
    "id" TEXT NOT NULL,
    "problemListId" TEXT NOT NULL,
    "problemListName" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProblemInProblemList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProblemInProblemList_problemListId_problemId_key" ON "ProblemInProblemList"("problemListId", "problemId");

-- CreateIndex
CREATE UNIQUE INDEX "ProblemsSolved_userId_problemId_key" ON "ProblemsSolved"("userId", "problemId");

-- AddForeignKey
ALTER TABLE "ProblemList" ADD CONSTRAINT "ProblemList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemInProblemList" ADD CONSTRAINT "ProblemInProblemList_problemListId_fkey" FOREIGN KEY ("problemListId") REFERENCES "ProblemList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemInProblemList" ADD CONSTRAINT "ProblemInProblemList_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
