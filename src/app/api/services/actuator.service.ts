/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { beans } from '../fn/actuator/beans';
import { Beans$Params } from '../fn/actuator/beans';
import { caches } from '../fn/actuator/caches';
import { Caches$Params } from '../fn/actuator/caches';
import { caches2 } from '../fn/actuator/caches-2';
import { Caches2$Params } from '../fn/actuator/caches-2';
import { cachesCache } from '../fn/actuator/caches-cache';
import { CachesCache$Params } from '../fn/actuator/caches-cache';
import { cachesCache2 } from '../fn/actuator/caches-cache-2';
import { CachesCache2$Params } from '../fn/actuator/caches-cache-2';
import { conditions } from '../fn/actuator/conditions';
import { Conditions$Params } from '../fn/actuator/conditions';
import { configprops } from '../fn/actuator/configprops';
import { Configprops$Params } from '../fn/actuator/configprops';
import { configpropsPrefix } from '../fn/actuator/configprops-prefix';
import { ConfigpropsPrefix$Params } from '../fn/actuator/configprops-prefix';
import { env } from '../fn/actuator/env';
import { Env$Params } from '../fn/actuator/env';
import { envToMatch } from '../fn/actuator/env-to-match';
import { EnvToMatch$Params } from '../fn/actuator/env-to-match';
import { health } from '../fn/actuator/health';
import { Health$Params } from '../fn/actuator/health';
import { healthPath } from '../fn/actuator/health-path';
import { HealthPath$Params } from '../fn/actuator/health-path';
import { heapdump } from '../fn/actuator/heapdump';
import { Heapdump$Params } from '../fn/actuator/heapdump';
import { info } from '../fn/actuator/info';
import { Info$Params } from '../fn/actuator/info';
import { Link } from '../models/link';
import { links } from '../fn/actuator/links';
import { Links$Params } from '../fn/actuator/links';
import { loggers } from '../fn/actuator/loggers';
import { Loggers$Params } from '../fn/actuator/loggers';
import { loggersName } from '../fn/actuator/loggers-name';
import { LoggersName$Params } from '../fn/actuator/loggers-name';
import { loggersName2 } from '../fn/actuator/loggers-name-2';
import { LoggersName2$Params } from '../fn/actuator/loggers-name-2';
import { mappings } from '../fn/actuator/mappings';
import { Mappings$Params } from '../fn/actuator/mappings';
import { metrics } from '../fn/actuator/metrics';
import { Metrics$Params } from '../fn/actuator/metrics';
import { metricsRequiredMetricName } from '../fn/actuator/metrics-required-metric-name';
import { MetricsRequiredMetricName$Params } from '../fn/actuator/metrics-required-metric-name';
import { sbom } from '../fn/actuator/sbom';
import { Sbom$Params } from '../fn/actuator/sbom';
import { sbomId } from '../fn/actuator/sbom-id';
import { SbomId$Params } from '../fn/actuator/sbom-id';
import { scheduledtasks } from '../fn/actuator/scheduledtasks';
import { Scheduledtasks$Params } from '../fn/actuator/scheduledtasks';
import { threaddump$Json } from '../fn/actuator/threaddump-json';
import { Threaddump$Json$Params } from '../fn/actuator/threaddump-json';
import { threaddump$PlainCharsetUtf8 } from '../fn/actuator/threaddump-plain-charset-utf-8';
import { Threaddump$PlainCharsetUtf8$Params } from '../fn/actuator/threaddump-plain-charset-utf-8';


/**
 * Monitor and interact
 */
@Injectable({ providedIn: 'root' })
export class ActuatorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `loggersName()` */
  static readonly LoggersNamePath = '/api/v1/management-server/loggers/{name}';

  /**
   * Actuator web endpoint 'loggers-name'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loggersName()` instead.
   *
   * This method doesn't expect any request body.
   */
  loggersName$Response(params: LoggersName$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return loggersName(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'loggers-name'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loggersName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loggersName(params: LoggersName$Params, context?: HttpContext): Observable<{
}> {
    return this.loggersName$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `loggersName2()` */
  static readonly LoggersName2Path = '/api/v1/management-server/loggers/{name}';

  /**
   * Actuator web endpoint 'loggers-name'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loggersName2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loggersName2$Response(params: LoggersName2$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return loggersName2(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'loggers-name'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loggersName2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loggersName2(params: LoggersName2$Params, context?: HttpContext): Observable<{
}> {
    return this.loggersName2$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `links()` */
  static readonly LinksPath = '/api/v1/management-server';

  /**
   * Actuator root web endpoint.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `links()` instead.
   *
   * This method doesn't expect any request body.
   */
  links$Response(params?: Links$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: {
[key: string]: Link;
};
}>> {
    return links(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator root web endpoint.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `links$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  links(params?: Links$Params, context?: HttpContext): Observable<{
[key: string]: {
[key: string]: Link;
};
}> {
    return this.links$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: {
[key: string]: Link;
};
}>): {
[key: string]: {
[key: string]: Link;
};
} => r.body)
    );
  }

  /** Path part for operation `threaddump()` */
  static readonly ThreaddumpPath = '/api/v1/management-server/threaddump';

  /**
   * Actuator web endpoint 'threaddump'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `threaddump$PlainCharsetUtf8()` instead.
   *
   * This method doesn't expect any request body.
   */
  threaddump$PlainCharsetUtf8$Response(params?: Threaddump$PlainCharsetUtf8$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return threaddump$PlainCharsetUtf8(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'threaddump'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `threaddump$PlainCharsetUtf8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  threaddump$PlainCharsetUtf8(params?: Threaddump$PlainCharsetUtf8$Params, context?: HttpContext): Observable<{
}> {
    return this.threaddump$PlainCharsetUtf8$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /**
   * Actuator web endpoint 'threaddump'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `threaddump$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  threaddump$Json$Response(params?: Threaddump$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return threaddump$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'threaddump'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `threaddump$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  threaddump$Json(params?: Threaddump$Json$Params, context?: HttpContext): Observable<{
}> {
    return this.threaddump$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `scheduledtasks()` */
  static readonly ScheduledtasksPath = '/api/v1/management-server/scheduledtasks';

  /**
   * Actuator web endpoint 'scheduledtasks'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `scheduledtasks()` instead.
   *
   * This method doesn't expect any request body.
   */
  scheduledtasks$Response(params?: Scheduledtasks$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return scheduledtasks(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'scheduledtasks'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `scheduledtasks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  scheduledtasks(params?: Scheduledtasks$Params, context?: HttpContext): Observable<{
}> {
    return this.scheduledtasks$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `sbom()` */
  static readonly SbomPath = '/api/v1/management-server/sbom';

  /**
   * Actuator web endpoint 'sbom'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sbom()` instead.
   *
   * This method doesn't expect any request body.
   */
  sbom$Response(params?: Sbom$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return sbom(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'sbom'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sbom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sbom(params?: Sbom$Params, context?: HttpContext): Observable<{
}> {
    return this.sbom$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `sbomId()` */
  static readonly SbomIdPath = '/api/v1/management-server/sbom/{id}';

  /**
   * Actuator web endpoint 'sbom-id'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sbomId()` instead.
   *
   * This method doesn't expect any request body.
   */
  sbomId$Response(params: SbomId$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return sbomId(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'sbom-id'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sbomId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sbomId(params: SbomId$Params, context?: HttpContext): Observable<{
}> {
    return this.sbomId$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `metrics()` */
  static readonly MetricsPath = '/api/v1/management-server/metrics';

  /**
   * Actuator web endpoint 'metrics'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metrics()` instead.
   *
   * This method doesn't expect any request body.
   */
  metrics$Response(params?: Metrics$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return metrics(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'metrics'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `metrics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  metrics(params?: Metrics$Params, context?: HttpContext): Observable<{
}> {
    return this.metrics$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `metricsRequiredMetricName()` */
  static readonly MetricsRequiredMetricNamePath = '/api/v1/management-server/metrics/{requiredMetricName}';

  /**
   * Actuator web endpoint 'metrics-requiredMetricName'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metricsRequiredMetricName()` instead.
   *
   * This method doesn't expect any request body.
   */
  metricsRequiredMetricName$Response(params: MetricsRequiredMetricName$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return metricsRequiredMetricName(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'metrics-requiredMetricName'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `metricsRequiredMetricName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  metricsRequiredMetricName(params: MetricsRequiredMetricName$Params, context?: HttpContext): Observable<{
}> {
    return this.metricsRequiredMetricName$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `mappings()` */
  static readonly MappingsPath = '/api/v1/management-server/mappings';

  /**
   * Actuator web endpoint 'mappings'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mappings()` instead.
   *
   * This method doesn't expect any request body.
   */
  mappings$Response(params?: Mappings$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return mappings(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'mappings'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mappings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mappings(params?: Mappings$Params, context?: HttpContext): Observable<{
}> {
    return this.mappings$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `loggers()` */
  static readonly LoggersPath = '/api/v1/management-server/loggers';

  /**
   * Actuator web endpoint 'loggers'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loggers()` instead.
   *
   * This method doesn't expect any request body.
   */
  loggers$Response(params?: Loggers$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return loggers(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'loggers'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loggers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loggers(params?: Loggers$Params, context?: HttpContext): Observable<{
}> {
    return this.loggers$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `info()` */
  static readonly InfoPath = '/api/v1/management-server/info';

  /**
   * Actuator web endpoint 'info'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `info()` instead.
   *
   * This method doesn't expect any request body.
   */
  info$Response(params?: Info$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return info(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'info'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `info$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  info(params?: Info$Params, context?: HttpContext): Observable<{
}> {
    return this.info$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `heapdump()` */
  static readonly HeapdumpPath = '/api/v1/management-server/heapdump';

  /**
   * Actuator web endpoint 'heapdump'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `heapdump()` instead.
   *
   * This method doesn't expect any request body.
   */
  heapdump$Response(params?: Heapdump$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return heapdump(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'heapdump'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `heapdump$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  heapdump(params?: Heapdump$Params, context?: HttpContext): Observable<{
}> {
    return this.heapdump$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `health()` */
  static readonly HealthPath = '/api/v1/management-server/health';

  /**
   * Actuator web endpoint 'health'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `health()` instead.
   *
   * This method doesn't expect any request body.
   */
  health$Response(params?: Health$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return health(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'health'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `health$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  health(params?: Health$Params, context?: HttpContext): Observable<{
}> {
    return this.health$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `healthPath()` */
  static readonly HealthPathPath = '/api/v1/management-server/health/**';

  /**
   * Actuator web endpoint 'health-path'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `healthPath()` instead.
   *
   * This method doesn't expect any request body.
   */
  healthPath$Response(params?: HealthPath$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return healthPath(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'health-path'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `healthPath$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  healthPath(params?: HealthPath$Params, context?: HttpContext): Observable<{
}> {
    return this.healthPath$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `env()` */
  static readonly EnvPath = '/api/v1/management-server/env';

  /**
   * Actuator web endpoint 'env'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `env()` instead.
   *
   * This method doesn't expect any request body.
   */
  env$Response(params?: Env$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return env(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'env'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `env$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  env(params?: Env$Params, context?: HttpContext): Observable<{
}> {
    return this.env$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `envToMatch()` */
  static readonly EnvToMatchPath = '/api/v1/management-server/env/{toMatch}';

  /**
   * Actuator web endpoint 'env-toMatch'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `envToMatch()` instead.
   *
   * This method doesn't expect any request body.
   */
  envToMatch$Response(params: EnvToMatch$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return envToMatch(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'env-toMatch'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `envToMatch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  envToMatch(params: EnvToMatch$Params, context?: HttpContext): Observable<{
}> {
    return this.envToMatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `configprops()` */
  static readonly ConfigpropsPath = '/api/v1/management-server/configprops';

  /**
   * Actuator web endpoint 'configprops'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configprops()` instead.
   *
   * This method doesn't expect any request body.
   */
  configprops$Response(params?: Configprops$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return configprops(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'configprops'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `configprops$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configprops(params?: Configprops$Params, context?: HttpContext): Observable<{
}> {
    return this.configprops$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `configpropsPrefix()` */
  static readonly ConfigpropsPrefixPath = '/api/v1/management-server/configprops/{prefix}';

  /**
   * Actuator web endpoint 'configprops-prefix'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configpropsPrefix()` instead.
   *
   * This method doesn't expect any request body.
   */
  configpropsPrefix$Response(params: ConfigpropsPrefix$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return configpropsPrefix(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'configprops-prefix'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `configpropsPrefix$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configpropsPrefix(params: ConfigpropsPrefix$Params, context?: HttpContext): Observable<{
}> {
    return this.configpropsPrefix$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `conditions()` */
  static readonly ConditionsPath = '/api/v1/management-server/conditions';

  /**
   * Actuator web endpoint 'conditions'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `conditions()` instead.
   *
   * This method doesn't expect any request body.
   */
  conditions$Response(params?: Conditions$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return conditions(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'conditions'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `conditions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  conditions(params?: Conditions$Params, context?: HttpContext): Observable<{
}> {
    return this.conditions$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `caches()` */
  static readonly CachesPath = '/api/v1/management-server/caches';

  /**
   * Actuator web endpoint 'caches'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `caches()` instead.
   *
   * This method doesn't expect any request body.
   */
  caches$Response(params?: Caches$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return caches(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'caches'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `caches$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  caches(params?: Caches$Params, context?: HttpContext): Observable<{
}> {
    return this.caches$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `caches2()` */
  static readonly Caches2Path = '/api/v1/management-server/caches';

  /**
   * Actuator web endpoint 'caches'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `caches2()` instead.
   *
   * This method doesn't expect any request body.
   */
  caches2$Response(params?: Caches2$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return caches2(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'caches'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `caches2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  caches2(params?: Caches2$Params, context?: HttpContext): Observable<{
}> {
    return this.caches2$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `cachesCache()` */
  static readonly CachesCachePath = '/api/v1/management-server/caches/{cache}';

  /**
   * Actuator web endpoint 'caches-cache'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cachesCache()` instead.
   *
   * This method doesn't expect any request body.
   */
  cachesCache$Response(params: CachesCache$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return cachesCache(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'caches-cache'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cachesCache$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cachesCache(params: CachesCache$Params, context?: HttpContext): Observable<{
}> {
    return this.cachesCache$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `cachesCache2()` */
  static readonly CachesCache2Path = '/api/v1/management-server/caches/{cache}';

  /**
   * Actuator web endpoint 'caches-cache'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cachesCache2()` instead.
   *
   * This method doesn't expect any request body.
   */
  cachesCache2$Response(params: CachesCache2$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return cachesCache2(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'caches-cache'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cachesCache2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cachesCache2(params: CachesCache2$Params, context?: HttpContext): Observable<{
}> {
    return this.cachesCache2$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `beans()` */
  static readonly BeansPath = '/api/v1/management-server/beans';

  /**
   * Actuator web endpoint 'beans'.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `beans()` instead.
   *
   * This method doesn't expect any request body.
   */
  beans$Response(params?: Beans$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return beans(this.http, this.rootUrl, params, context);
  }

  /**
   * Actuator web endpoint 'beans'.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `beans$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  beans(params?: Beans$Params, context?: HttpContext): Observable<{
}> {
    return this.beans$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
