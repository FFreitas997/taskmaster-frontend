/* tslint:disable */
/* eslint-disable */
import { TaskCommentDto } from '../models/task-comment-dto';
export interface TaskDto {
  comments?: Array<TaskCommentDto>;
  description?: string;
  dueDate?: string;
  id?: number;
  lastModifiedAt?: string;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  status?: 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'ARCHIVED';
  title?: string;
}
