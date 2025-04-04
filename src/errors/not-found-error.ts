import { CustomError } from './custom-error';

export class NotFound extends CustomError {
  statusCode = 404;
  constructor(public message: string = 'Route not found') {
    super(message);

    this.message = message;

    Object.setPrototypeOf(this, NotFound.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
