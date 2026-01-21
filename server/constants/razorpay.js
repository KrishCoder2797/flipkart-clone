import Razorpay from "razorpay";

export const getRazorpayInstance = () => {
  if (!process.env.RAZORPAY_ID_KEY || !process.env.RAZORPAY_SECRET_KEY) {
    throw new Error("Razorpay keys not found in environment variables");
  }

  return new Razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });
};
