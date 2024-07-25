/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageTaskDto } from '../../models/page-task-dto';

export interface GetArchivedTasks$Params {
  page?: number;
  size?: number;
}

export function getArchivedTasks(http: HttpClient, rootUrl: string, params?: GetArchivedTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageTaskDto>> {
  const rb = new RequestBuilder(rootUrl, getArchivedTasks.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageTaskDto>;
    })
  );
}

getArchivedTasks.PATH = '/api/v1/tasks/archived';
