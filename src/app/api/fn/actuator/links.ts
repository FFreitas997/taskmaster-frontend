/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Link } from '../../models/link';

export interface Links$Params {
}

export function links(http: HttpClient, rootUrl: string, params?: Links$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: {
[key: string]: Link;
};
}>> {
  const rb = new RequestBuilder(rootUrl, links.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      [key: string]: {
      [key: string]: Link;
      };
      }>;
    })
  );
}

links.PATH = '/api/v1/management-server';
