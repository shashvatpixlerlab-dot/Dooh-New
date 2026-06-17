import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { Prisma } from "@dooh/db";

@Catch()
export class PrismaAwareExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaAwareExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const body = exception.getResponse();
      res.status(status).json(typeof body === "string" ? { statusCode: status, message: body } : body);
      return;
    }

    this.logger.error(exception);

    let message = "Internal server error";
    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    if (
      exception instanceof Prisma.PrismaClientInitializationError ||
      exception instanceof Prisma.PrismaClientKnownRequestError ||
      exception instanceof Prisma.PrismaClientRustPanicError ||
      exception instanceof Prisma.PrismaClientUnknownRequestError
    ) {
      message = exception.message;
    } else if (exception instanceof Error && process.env.API_EXPOSE_ERRORS === "true") {
      message = exception.message;
    }

    res.status(status).json({ statusCode: status, message });
  }
}
