import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/services/auth.service';
import { SubscriptionService } from '../../../core/services/subscription.service';
import { User } from '../../../core/models/user.model';
import { UserSubscription } from '../../../core/models/user-subscription.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<User | null>;
  showRenewalAlert = false;
  currentSubscription: UserSubscription | null = null;

  constructor(
    private authService: AuthService,
    private subscriptionService: SubscriptionService,
    private router: Router
  ) {
    this.currentUser$ = this.authService.currentUser$;
  }

  ngOnInit(): void {
    this.checkSubscriptionAlert();
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  private checkSubscriptionAlert(): void {
    if (this.authService.isLoggedIn()) {
      this.subscriptionService.checkRenewalAlert().subscribe(result => {
        this.showRenewalAlert = result.needsRenewalAlert;

        if (this.showRenewalAlert) {
          this.subscriptionService.getCurrentSubscription().subscribe(subscription => {
            this.currentSubscription = subscription;
          });
        }
      });
    }
  }
}
