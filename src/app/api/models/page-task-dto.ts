/* tslint:disable */
/* eslint-disable */
import { PageableObject } from '../models/pageable-object';
import { SortObject } from '../models/sort-object';
import { TaskDto } from '../models/task-dto';
export interface PageTaskDto {
  content?: Array<TaskDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: Array<SortObject>;
  totalElements?: number;
  totalPages?: number;
}
