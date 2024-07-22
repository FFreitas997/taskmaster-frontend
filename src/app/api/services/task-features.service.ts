/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { archiveTask } from '../fn/task-features/archive-task';
import { ArchiveTask$Params } from '../fn/task-features/archive-task';
import { createTask } from '../fn/task-features/create-task';
import { CreateTask$Params } from '../fn/task-features/create-task';
import { createTaskComment } from '../fn/task-features/create-task-comment';
import { CreateTaskComment$Params } from '../fn/task-features/create-task-comment';
import { getAllTasks } from '../fn/task-features/get-all-tasks';
import { GetAllTasks$Params } from '../fn/task-features/get-all-tasks';
import { getArchivedTasks } from '../fn/task-features/get-archived-tasks';
import { GetArchivedTasks$Params } from '../fn/task-features/get-archived-tasks';
import { getTaskById } from '../fn/task-features/get-task-by-id';
import { GetTaskById$Params } from '../fn/task-features/get-task-by-id';
import { getTasks } from '../fn/task-features/get-tasks';
import { GetTasks$Params } from '../fn/task-features/get-tasks';
import { PageTaskDto } from '../models/page-task-dto';
import { TaskDto } from '../models/task-dto';
import { updateTask } from '../fn/task-features/update-task';
import { UpdateTask$Params } from '../fn/task-features/update-task';


/**
 * These operations are related to task management.
 */
@Injectable({ providedIn: 'root' })
export class TaskFeaturesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTaskById()` */
  static readonly GetTaskByIdPath = '/api/v1/tasks/{id}';

  /**
   * Get Task by ID.
   *
   * This operation retrieves a task by its ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTaskById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTaskById$Response(params: GetTaskById$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskDto>> {
    return getTaskById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Task by ID.
   *
   * This operation retrieves a task by its ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTaskById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTaskById(params: GetTaskById$Params, context?: HttpContext): Observable<TaskDto> {
    return this.getTaskById$Response(params, context).pipe(
      map((r: StrictHttpResponse<TaskDto>): TaskDto => r.body)
    );
  }

  /** Path part for operation `updateTask()` */
  static readonly UpdateTaskPath = '/api/v1/tasks/{id}';

  /**
   * Update Task.
   *
   * This operation updates a task by its ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask$Response(params: UpdateTask$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateTask(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Task.
   *
   * This operation updates a task by its ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask(params: UpdateTask$Params, context?: HttpContext): Observable<void> {
    return this.updateTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getTasks()` */
  static readonly GetTasksPath = '/api/v1/tasks';

  /**
   * Get User active tasks.
   *
   * This operation retrieves all tasks related to the authenticated user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTasks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTasks$Response(params?: GetTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageTaskDto>> {
    return getTasks(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User active tasks.
   *
   * This operation retrieves all tasks related to the authenticated user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTasks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTasks(params?: GetTasks$Params, context?: HttpContext): Observable<PageTaskDto> {
    return this.getTasks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageTaskDto>): PageTaskDto => r.body)
    );
  }

  /** Path part for operation `createTask()` */
  static readonly CreateTaskPath = '/api/v1/tasks';

  /**
   * Create Task.
   *
   * This operation creates a new task.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTask()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTask$Response(params: CreateTask$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createTask(this.http, this.rootUrl, params, context);
  }

  /**
   * Create Task.
   *
   * This operation creates a new task.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTask$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTask(params: CreateTask$Params, context?: HttpContext): Observable<void> {
    return this.createTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createTaskComment()` */
  static readonly CreateTaskCommentPath = '/api/v1/tasks/{id}/comments';

  /**
   * Create Task Comment.
   *
   * This operation creates a new comment for a task.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTaskComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTaskComment$Response(params: CreateTaskComment$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createTaskComment(this.http, this.rootUrl, params, context);
  }

  /**
   * Create Task Comment.
   *
   * This operation creates a new comment for a task.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTaskComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTaskComment(params: CreateTaskComment$Params, context?: HttpContext): Observable<void> {
    return this.createTaskComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `archiveTask()` */
  static readonly ArchiveTaskPath = '/api/v1/tasks/archive/{id}';

  /**
   * Archive Task.
   *
   * This operation archives a task by its ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `archiveTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  archiveTask$Response(params: ArchiveTask$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return archiveTask(this.http, this.rootUrl, params, context);
  }

  /**
   * Archive Task.
   *
   * This operation archives a task by its ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `archiveTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  archiveTask(params: ArchiveTask$Params, context?: HttpContext): Observable<void> {
    return this.archiveTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getArchivedTasks()` */
  static readonly GetArchivedTasksPath = '/api/v1/tasks/archived';

  /**
   * Get User archived tasks.
   *
   * This operation retrieves all archived tasks related to the authenticated user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArchivedTasks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArchivedTasks$Response(params?: GetArchivedTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageTaskDto>> {
    return getArchivedTasks(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User archived tasks.
   *
   * This operation retrieves all archived tasks related to the authenticated user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArchivedTasks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArchivedTasks(params?: GetArchivedTasks$Params, context?: HttpContext): Observable<PageTaskDto> {
    return this.getArchivedTasks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageTaskDto>): PageTaskDto => r.body)
    );
  }

  /** Path part for operation `getAllTasks()` */
  static readonly GetAllTasksPath = '/api/v1/tasks/all';

  /**
   * Get all tasks.
   *
   * This operation retrieves all tasks.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTasks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTasks$Response(params?: GetAllTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageTaskDto>> {
    return getAllTasks(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all tasks.
   *
   * This operation retrieves all tasks.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTasks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTasks(params?: GetAllTasks$Params, context?: HttpContext): Observable<PageTaskDto> {
    return this.getAllTasks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageTaskDto>): PageTaskDto => r.body)
    );
  }

}
