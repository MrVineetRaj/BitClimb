/*
  Warnings:

  - Added the required column `referenceSolutionFooter` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referenceSolutionHeader` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "companies" TEXT[],
ADD COLUMN     "referenceSolutionFooter" JSONB NOT NULL,
ADD COLUMN     "referenceSolutionHeader" JSONB NOT NULL;
