


import { Box, Button, styled, Stack } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { addToCart } from "../../redux/actions/cartActions";
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
} from "../../service/api";



const LeftContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "20px",
  gap: "16px",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

const ImageContainer = styled(Box)`
  border: 1px solid #f0f0f0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  margin-left: 20px;
`;

const Image = styled("img")({
  width: "100%",
  maxWidth: "300px",
  objectFit: "contain",
});

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 2px;
  text-transform: none;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;



const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity] = useState(1);

  const { id, price } = product;


  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  
  const buyNow = async () => {
    try {
      const amount = price.cost; 

      
      const order = await createRazorpayOrder(amount);

      
      const options = {
        key: process.env.REACT_APP_RAZORPAY_ID_KEY, 
        amount: order.amount,
        currency: "INR",
        name: "ShopEase",
        description: "Product Purchase",
        order_id: order.id,

        handler: async function (response) {
          
          const verifyRes = await verifyRazorpayPayment(response);

          if (verifyRes.success) {
            alert("Payment Successful 🎉");
            navigate("/cart"); 
          } else {
            alert("Payment verification failed ❌");
          }
        },

        prefill: {
          name: "Krushna Gajare",
          email: "krushnagajare.99@gmail.com",
          contact: "8830109545",
        },

        theme: {
          color: "#2874f0",
        },
      };

      
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <LeftContainer>
      <ImageContainer>
        <Image src={product.detailUrl} alt="Product" />
      </ImageContainer>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "95%",
          justifyContent: "space-between",
          marginLeft: "20px",
        }}
      >
        <StyledButton
          type="button"
          variant="contained"
          onClick={addItemToCart}
          sx={{ background: "#ff9f00" }}
        >
          <Cart sx={{ mr: 1 }} /> Add to Cart
        </StyledButton>

        <StyledButton
        type="button"
          variant="contained"
          onClick={buyNow}
          sx={{ background: "#fb541b" }}
        >
          <Flash sx={{ mr: 1 }} /> Buy Now
        </StyledButton>
      </Stack>
    </LeftContainer>
  );
};

export default ActionItem;
