/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TaskDto } from '../../models/task-dto';

export interface GetTaskById$Params {
  id: number;
}

export function getTaskById(http: HttpClient, rootUrl: string, params: GetTaskById$Params, context?: HttpContext): Observable<StrictHttpResponse<TaskDto>> {
  const rb = new RequestBuilder(rootUrl, getTaskById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TaskDto>;
    })
  );
}

getTaskById.PATH = '/api/v1/tasks/{id}';
