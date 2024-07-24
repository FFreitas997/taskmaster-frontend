import {CanActivateFn, Router} from "@angular/router";
import {KeycloakService} from "../services/keycloak/keycloak.service";
import {inject} from "@angular/core";

export const adminGuard: CanActivateFn = () => {
  const service = inject(KeycloakService);
  const router = inject(Router);

  if (service.keycloak?.isTokenExpired()) {
    router.navigate(['/home']).then();
    return false;
  }

  if (!service.userProfile || !service.userProfile.roles.includes('admin')) {
    router.navigate(['/home']).then();
    return false;
  }

  return true;
}
