/*
  Warnings:

  - Added the required column `codeSnippetsFooter` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codeSnippetsHeader` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "codeSnippetsFooter" JSONB NOT NULL,
ADD COLUMN     "codeSnippetsHeader" JSONB NOT NULL;
