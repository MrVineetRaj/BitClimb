import { validationResult } from "express-validator";
import { ApiError } from "../libs/helpers.js";
// import { ApiError } from "../utils/api.error.js";
export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedError = [];
  //info : so here we can directly pass the errors to my ApiError
  // info : But to make it more readable we customized it and stored it in extractedError
  errors.array().map((err) =>
    extractedError.push({
      [err.path]: err.msg,
    })
  );
  console.log(extractedError);
  
  next(new ApiError(400, "Received data is not valid !", extractedError));
};
