import type { NextFunction, Request, Response } from 'express';

import { CustomError } from '../errors/custom-error';
import { LOGGER } from '../logging';

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
  }
  else {
    LOGGER.error(err);
    res.status(400).send({
      errors: [
        {
          message: 'Some thing went wrong',
        },
      ],
    });
  }
}
