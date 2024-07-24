import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {KeycloakService} from "../../services/keycloak/keycloak.service";
import {UserProfile} from "../../services/keycloak/user-profile";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: UserProfile | null = null;
  public authenticated: boolean = false;
  public userSubscription: Subscription | null = null;

  constructor(private service: KeycloakService) {
  }

  ngOnInit(): void {
    this.userSubscription = this.service.user.subscribe(user => {
      this.authenticated = !!user;
      this.user = user;
    })
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  public logout(): void {
    this.service.logout();
  }

  public accountManagement(): void {
    this.service.accountManagement();
  }

}
