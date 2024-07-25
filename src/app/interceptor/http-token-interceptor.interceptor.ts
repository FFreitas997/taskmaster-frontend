import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {KeycloakService} from "../services/keycloak/keycloak.service";

export const httpTokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(KeycloakService);

  const token = service.token;

  if (token) {
    req = req.clone({
      headers: new HttpHeaders({Authorization: `Bearer ${token}`})
    });
  }

  return next(req)
};
