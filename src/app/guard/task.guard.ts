import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {KeycloakService} from "../services/keycloak/keycloak.service";

export const taskGuard: CanActivateFn = () => {
  const service = inject(KeycloakService);
  const router = inject(Router);

  if (service.keycloak?.isTokenExpired()) {
    router.navigate(['/login']).then();
    return false;
  }

  if (!service.roles.includes('manager')) {
    router.navigate(['/login']).then();
    return false;
  }

  return true;
}
