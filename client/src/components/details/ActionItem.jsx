// Usinf Grid View - Problem Occured 


// import { Box , Button , styled } from "@mui/material";

// import {ShoppingCart as Cart , FlashOn as Flash} from '@mui/icons-material';
 

// const LeftContainer = styled(Box)`

//     min-width:40% ;
//     padding : 40px 0 0 80px ;

// ` ;

// const StyledButton = styled(Button)`

//     width:48% ;
//     height:50px ;
//     border-radius :2px ;

// ` ;

// const Image = styled('img')({
//     padding:'15px'
// }) ;

// const ActionItem = ({product}) =>{

//     return (
//         <LeftContainer>
//             <Box style={{padding:'15px 20px ' , border :'1px solid #f0f0f0f0' ,width:'90%'}}>
//                  <Image src={product.detailUrl} alt="Product"  />
//             </Box>
//             <StyledButton variant="contained" style={{marginRight:10 , background:'#ff9f00'}}> < Cart />Add to Cart</StyledButton>
//             <StyledButton variant="contained" style={{background: '#fb541b'}}> <Flash />Buy Now</StyledButton>
//         </LeftContainer>
//     )
// }

// export default ActionItem ;



import { Box, Button, styled, Stack } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";


import {addToCart} from '../../redux/actions/cartActions'   ;

const LeftContainer = styled(Box)(({theme}) => ({

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '20px',
          gap: '16px',
          [theme.breakpoints.down('md')]:{
            padding:'10px' 
          }
}))
 

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
`;

const ActionItem = ({ product }) => {


    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;
    const [quantity,setQuantity] = useState(1) ;

    const {id} = product ;

    const addItemToCart = () => {

        dispatch(addToCart(id,quantity)) ;
        navigate('/cart') ;

    }



  return (
    <LeftContainer>
      <ImageContainer>
        <Image src={product.detailUrl} alt="Product" />
      </ImageContainer>

      <Stack
        direction="row"
        spacing={2}
        sx={{ width: "95%", justifyContent: "space-between", marginLeft: "20px" }} 
      >
        <StyledButton variant="contained" onClick={()=> addItemToCart()} sx={{ background: "#ff9f00" }}>
          <Cart sx={{ mr: 1 }} /> Add to Cart
        </StyledButton>
        <StyledButton variant="contained" sx={{ background: "#fb541b" }}>
          <Flash sx={{ mr: 1 }} /> Buy Now
        </StyledButton>
      </Stack>
    </LeftContainer>
  );
};

export default ActionItem;

