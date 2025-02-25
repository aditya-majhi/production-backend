class ApiError extends Error {
  constructor(statusCode, errors = [], message, stack) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.message = message;
    this.stack = stack;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
