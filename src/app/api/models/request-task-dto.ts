/* tslint:disable */
/* eslint-disable */
export interface RequestTaskDto {
  description?: string;
  dueDate: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  status?: 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'ARCHIVED';
  title: string;
}
