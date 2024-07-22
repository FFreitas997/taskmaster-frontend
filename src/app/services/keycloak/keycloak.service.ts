import {Injectable} from '@angular/core';
import Keycloak, {KeycloakProfile} from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;
  private _profile: KeycloakProfile | undefined;
  private _token: string | undefined;
  private _roles: string[] = [];

  constructor() {
  }

  public async init() {
    this._keycloak = new Keycloak({
      url: 'http://localhost:9090',
      realm: 'taskmaster',
      clientId: 'taskmaster-client'
    });

    const authenticated = await this._keycloak?.init({
      onLoad: 'login-required'
    });

    if (authenticated) {
      this._profile = await this._keycloak?.loadUserProfile();
      this._token = this._keycloak?.token
      this._roles = this._keycloak?.resourceAccess?.['taskmaster-client']?.roles || [];
    }
  }

  get keycloak(): Keycloak | undefined {
    return this._keycloak;
  }

  public login() {
    return this._keycloak?.login({})
  }

  public logout() {
    return this._keycloak?.logout({})
  }

  public accountManagement() {
    return this._keycloak?.accountManagement()
  }

  get profile(): KeycloakProfile | undefined {
    return this._profile;
  }

  get token(): string | undefined {
    return this._token;
  }

  get roles(): string[] {
    return this._roles;
  }
}
