export interface PaymentResult {
  id: number;
  userSubscriptionId?: number;
  paymentProvider: string;
  transactionId: string;
  amount: number;
  currency: string;
  status: string;
  errorMessage?: string;
  createdAt: Date;
}
