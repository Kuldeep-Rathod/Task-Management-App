import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, { message: 'Status must be OPEN, IN_PROGRESS, or DONE' })
  status: TaskStatus;
}
