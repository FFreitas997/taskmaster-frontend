import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {KeycloakService} from "../services/keycloak/keycloak.service";

export const taskGuard: CanActivateFn = () => {
  const service = inject(KeycloakService);
  const router = inject(Router);

  if (service.keycloak?.isTokenExpired()) {
    router.navigate(['/home']).then();
    return false;
  }

  if (!service.userProfile || !service.userProfile?.roles.includes('manager')) {
    router.navigate(['/home']).then();
    return false;
  }

  return true;
}
