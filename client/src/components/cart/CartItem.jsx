import { Box, Button, Typography , styled } from "@mui/material";

import { addEllipsis } from "../../utils/commonUtils";
import ButtonGroup from './ButtonGroup' ;

const Component = styled(Box)`

        border-top : 1px solid #f0f0f0 ;
        display:flex ;
        background:  #fff ;
` ;

const LContainer = styled(Box)`

        margin:20px ;
        display:flex ;
        flex-direction:column ;
` ;

const SmallText = styled(Typography)`

        color:#878787 ;
        font-size:14px ;
        margin-top:10px ;

        
` ;

const Remove = styled(Button)`

    margin-top:20px ;
    font-size:16px ;
    color:#000 ;
    font-weight:600 ;

` ;


const CartItem = ({item}) => {

    const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Component>
        <LContainer>
                <img src={item.url} alt="product"  style={{height:110, width:110}}/>
                <ButtonGroup />

        </LContainer>

        <Box style={{margin:20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                          <Box component="span"><img src={fassured} alt="fliplart" style={{width:50 , marginLeft:10}} /></Box>
                </SmallText>

                <Typography style={{margin:'20px 0'}} sx={{ marginTop: 2 }}>
                    <Box component="span" sx={{ fontSize: 18, fontWeight: 600 }}>
                    ₹{item.price.cost}
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                    <Box component="span" sx={{ color: "#878787" }}>
                    <strike>₹{item.price.mrp}</strike>
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                    <Box component="span" sx={{ color: "green" }}>
                    {item.price.discount}
                    </Box>
                </Typography>
                <Remove>Remove</Remove>
               
        </Box>
    </Component>
  )
}

export default CartItem ;