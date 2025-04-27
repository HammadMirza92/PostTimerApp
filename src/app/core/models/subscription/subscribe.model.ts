export interface SubscribeRequest {
  subscriptionPlanId: number;
  autoRenew: boolean;
  paymentMethodId: string;
}
