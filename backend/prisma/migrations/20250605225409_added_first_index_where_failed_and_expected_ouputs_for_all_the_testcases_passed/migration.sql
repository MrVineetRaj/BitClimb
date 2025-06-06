-- AlterTable
ALTER TABLE "Submissions" ADD COLUMN     "expectedOutput" TEXT DEFAULT '',
ADD COLUMN     "firstIndexWhereFailed" INTEGER DEFAULT -1;
