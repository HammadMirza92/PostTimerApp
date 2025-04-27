import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { SubscribeRequest } from '../models/subscription/subscribe.model';
import { UserSubscription } from '../models/user-subscription.model';
import { PaymentResult } from '../models/payment/payment-result.model';
import { SubscriptionPlan } from '../models/subscription-plan.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  constructor(private apiService: ApiService) { }

  getSubscriptionPlans(): Observable<SubscriptionPlan[]> {
    return this.apiService.get<SubscriptionPlan[]>('subscription/plans');
  }

  getCurrentSubscription(): Observable<UserSubscription | null> {
    return this.apiService.get<UserSubscription | null>('subscription/current');
  }

  subscribe(subscribeRequest: SubscribeRequest): Observable<UserSubscription> {
    return this.apiService.post<UserSubscription>('subscription/subscribe', subscribeRequest);
  }

  cancelSubscription(): Observable<any> {
    return this.apiService.post<any>('subscription/cancel', {});
  }

  checkRenewalAlert(): Observable<{ needsRenewalAlert: boolean }> {
    return this.apiService.get<{ needsRenewalAlert: boolean }>('subscription/check-renewal-alert');
  }

  getPaymentHistory(): Observable<PaymentResult[]> {
    return this.apiService.get<PaymentResult[]>('subscription/payments');
  }
}
