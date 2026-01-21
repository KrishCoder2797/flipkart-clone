import crypto from "crypto";
import { getRazorpayInstance } from "../constants/razorpay.js";

export const createOrder = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();

    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
    });

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const verifyPayment = (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
};
