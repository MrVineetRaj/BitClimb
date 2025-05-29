import express from 'express';

import {addNewDailyChallenge} from '../controllers/streak.controllers.js';
const streakRouter = express.Router();

// streakRouter.post('/daily-challenge', addNewDailyChallenge);

export default streakRouter;