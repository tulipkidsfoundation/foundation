// For client-side implementation
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia',
});

// Create a function to handle payment intent creation
export async function createPaymentIntent(
  amount: number, 
  email: string, 
  registrationId: string, 
  customerName: string,
  address: {
    line1: string;
    city: string;
    postal_code: string;
    country: string;
  }
) {
  try {
    if (!amount || !email || !registrationId || !customerName || !address) {
      throw new Error('Missing required fields');
    }
    
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency: 'usd',
      receipt_email: email,
      description: 'Family Registration Fee',
      metadata: {
        registrationId: registrationId,
      },
      shipping: {
        name: customerName,
        address: address,
      },
    });

    if (!paymentIntent || !paymentIntent.client_secret) {
      throw new Error('Failed to create payment intent');
    }

    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}
