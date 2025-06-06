-- AlterTable
ALTER TABLE "ProblemsSolved" ADD COLUMN     "submissionId" TEXT;

-- AddForeignKey
ALTER TABLE "ProblemsSolved" ADD CONSTRAINT "ProblemsSolved_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
