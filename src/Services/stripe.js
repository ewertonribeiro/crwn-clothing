import { loadStripe } from '@stripe/stripe-js';

export async function GetStripe(){

const stripe = await loadStripe()

return stripe;

}
