/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MetricsRequiredMetricName$Params {
  requiredMetricName: string;
}

export function metricsRequiredMetricName(http: HttpClient, rootUrl: string, params: MetricsRequiredMetricName$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, metricsRequiredMetricName.PATH, 'get');
  if (params) {
    rb.path('requiredMetricName', params.requiredMetricName, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

metricsRequiredMetricName.PATH = '/api/v1/management-server/metrics/{requiredMetricName}';
