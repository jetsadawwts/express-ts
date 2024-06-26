export class HttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

export class ValidationError extends HttpError {
  constructor(public message: string) {
    super(400, message);
    this.name = 'VaildationError';
  }
}
