import crypto from "crypto";
const asyncHandler = (requestHandler) => {
  // info : requestHandler is a function which is passed as a parameter here

  if (typeof requestHandler !== "function") {
    throw new Error(
      `Expected a function but received ${typeof requestHandler} `
    );
  }

  // info : i assume that this will be used with express controllers so req,res,next will be injected by express
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      // console.log(err);
      next(err);
    });
  };
  // return async (req, res, next) => {
  //   try {
  //     await requestHandler(req, res, next);
  //   } catch (err) {
  //     console.log("Here");
  //     next(err);
  //   }
  // };
};

class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.message = message;
    if (data) {
      this.data = data;
    }
    this.statusCode = statusCode < 400;
  }
}

class ApiError extends Error {
  constructor(
    statusCode, //info : Most important stuff while building Error handler
    message = "Something went Wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      this.stack = Error.captureStackTrace(this);
    }
  }
}

const generateTemporaryToken = function () {
  const unHashedToken = crypto.randomBytes(20).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(unHashedToken)
    .digest("hex");

  const tokenExpiry = Date.now() + 20 * 60 * 1000;

  return {
    unHashedToken,
    hashedToken,
    tokenExpiry,
  };
};

export { ApiError, ApiResponse, asyncHandler, generateTemporaryToken };
