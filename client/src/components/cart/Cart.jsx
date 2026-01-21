

import { useSelector } from "react-redux";
import { Grid, Box, Typography, styled, Button } from "@mui/material";

import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
} from "../../service/api";



const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;

  &:hover {
    background: #fb641b;
  }
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 20,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));



const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  
  const getTotalAmount = () => {
    return cartItems.reduce((sum, item) => {
      return sum + item.price.cost;
    }, 0);
  };

  const buyNow = async () => {
    try {
      const amount = getTotalAmount(); 

      
      const order = await createRazorpayOrder(amount);

      
      const options = {
        key: "rzp_test_xxxxx", 
        amount: order.amount,
        currency: "INR",
        name: "Flipkart Clone",
        description: "Order Payment",
        order_id: order.id,

        handler: async function (response) {
          
          const verifyRes = await verifyRazorpayPayment(response);

          if (verifyRes.success) {
            alert("Payment Successful & Order Placed 🎉");
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
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>

            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <ButtonWrapper>
              <StyledButton onClick={buyNow}>
                Place Order
              </StyledButton>
            </ButtonWrapper>
          </LeftComponent>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
