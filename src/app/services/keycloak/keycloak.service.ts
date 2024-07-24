import {Injectable} from '@angular/core';
import Keycloak from "keycloak-js";
import {BehaviorSubject} from "rxjs";
import {UserProfile} from "./user-profile";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;
  private _token: string | undefined;
  private _user = new BehaviorSubject<UserProfile | null>(null);
  private _userProfile: UserProfile | undefined;

  constructor() {
  }

  public async init() {
    this._keycloak = new Keycloak({
      url: 'http://localhost:9090',
      realm: 'taskmaster',
      clientId: 'taskmaster-client'
    });

    const authenticated = await this._keycloak?.init({onLoad: 'login-required'});

    if (authenticated) {
      const userInfo = await this._keycloak?.loadUserProfile();
      this._token = this._keycloak?.token
      const profile: UserProfile = {
        id: userInfo?.id || '',
        username: userInfo?.username || '',
        email: userInfo?.email || '',
        firstName: userInfo?.firstName || '',
        lastName: userInfo?.lastName || '',
        roles: this._keycloak?.realmAccess?.roles || []
      }
      this._userProfile = profile;
      this._user.next(profile);
      console.log(this.token)
      console.log('User is authenticated');
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

  get token(): string | undefined {
    return this._token;
  }

  get user(): BehaviorSubject<UserProfile | null> {
    return this._user;
  }

  get userProfile(): UserProfile | undefined {
    return this._userProfile;
  }
}
