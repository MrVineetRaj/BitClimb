-- CreateIndex
CREATE INDEX "Contest_startTime_idx" ON "Contest"("startTime");

-- CreateIndex
CREATE INDEX "Contest_endTime_idx" ON "Contest"("endTime");

-- CreateIndex
CREATE INDEX "Contest_isRankingCompleted_idx" ON "Contest"("isRankingCompleted");

-- CreateIndex
CREATE INDEX "ContestProblem_contestId_idx" ON "ContestProblem"("contestId");

-- CreateIndex
CREATE INDEX "ContestProblem_problemId_idx" ON "ContestProblem"("problemId");

-- CreateIndex
CREATE INDEX "ContestProblem_problemIndex_idx" ON "ContestProblem"("problemIndex");

-- CreateIndex
CREATE INDEX "ContestSubmission_userId_idx" ON "ContestSubmission"("userId");

-- CreateIndex
CREATE INDEX "ContestSubmission_contestId_idx" ON "ContestSubmission"("contestId");

-- CreateIndex
CREATE INDEX "ContestSubmission_contestProblemId_idx" ON "ContestSubmission"("contestProblemId");

-- CreateIndex
CREATE INDEX "ContestSubmission_status_idx" ON "ContestSubmission"("status");

-- CreateIndex
CREATE INDEX "ContestSubmission_createdAt_idx" ON "ContestSubmission"("createdAt");

-- CreateIndex
CREATE INDEX "DailyChallenge_problemId_idx" ON "DailyChallenge"("problemId");

-- CreateIndex
CREATE INDEX "DailyChallenge_date_idx" ON "DailyChallenge"("date");

-- CreateIndex
CREATE INDEX "Problem_isPublic_idx" ON "Problem"("isPublic");

-- CreateIndex
CREATE INDEX "Problem_difficulty_idx" ON "Problem"("difficulty");

-- CreateIndex
CREATE INDEX "Problem_userId_idx" ON "Problem"("userId");

-- CreateIndex
CREATE INDEX "Problem_title_idx" ON "Problem"("title");

-- CreateIndex
CREATE INDEX "Problem_tags_idx" ON "Problem"("tags");

-- CreateIndex
CREATE INDEX "Problem_companies_idx" ON "Problem"("companies");

-- CreateIndex
CREATE INDEX "ProblemInProblemList_problemListId_idx" ON "ProblemInProblemList"("problemListId");

-- CreateIndex
CREATE INDEX "ProblemInProblemList_userId_idx" ON "ProblemInProblemList"("userId");

-- CreateIndex
CREATE INDEX "ProblemList_userId_idx" ON "ProblemList"("userId");

-- CreateIndex
CREATE INDEX "ProblemsSolved_problemId_idx" ON "ProblemsSolved"("problemId");

-- CreateIndex
CREATE INDEX "ProblemsSolved_userId_idx" ON "ProblemsSolved"("userId");

-- CreateIndex
CREATE INDEX "Submissions_userId_idx" ON "Submissions"("userId");

-- CreateIndex
CREATE INDEX "Submissions_problemId_idx" ON "Submissions"("problemId");

-- CreateIndex
CREATE INDEX "Submissions_status_idx" ON "Submissions"("status");

-- CreateIndex
CREATE INDEX "Submissions_isAccepted_idx" ON "Submissions"("isAccepted");

-- CreateIndex
CREATE INDEX "TestCases_problemId_idx" ON "TestCases"("problemId");
