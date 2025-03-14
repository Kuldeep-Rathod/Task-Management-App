import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { map } from 'rxjs';
import { Task } from './tasks/dto/task.entity';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<Task>) {
    return next.handle().pipe(map((data) => classToPlain(data)));
  }
}
