// Importing material UI component

import {AppBar , Toolbar,Box,styled,Typography,IconButton,Drawer , List , ListItem} from '@mui/material';
import { Link } from 'react-router-dom';
import {Menu} from '@mui/icons-material';
import { useState } from 'react';

//Impoting Component 
import Search from './Search'
import CustomButtons from './CustomButtons';


// Styling element of Material UI
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height:55px ;

` ;
const Component = styled(Link)`
margin-left :12% ;
line-height:0;
text-decoration: none ;
color:inherit ;

`;

const SubHeading = styled(Typography)`
font-size:10px ;
font-style:italic;

`;

// Styling component of HTML
const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft:4
});

const CustomButtonWrapper = styled(Box)(({theme}) =>({

     margin:'0 7% 0 7% '  ,
    [theme.breakpoints.down('md')]:{
        display:'none'

    }
})) ;
   
const MenuButton = styled(IconButton)(({theme}) =>({

    display:'none' ,
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Header = ()=>{
   // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const logoURL = 'https://firebasestorage.googleapis.com/v0/b/sppunote.firebasestorage.app/o/klogo.png?alt=media&token=b9fbf383-c82d-47cd-8b2b-20256f5da0e5' ;

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    const [open , setOpen] = useState(false) ;

    const handleOpen = () =>{
        setOpen(true) ;
    }

    const handleClose = () =>{
        setOpen(false) ;
    }

     const list = ()=>(
        <Box style = {{width :200}} onClick={handleClose}>
                <List>
                        <ListItem >
                            <CustomButtons  />
                        </ListItem>
                </List>
        </Box>

     )
    
    return (
     <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <MenuButton color='inherit' onClick={handleOpen} >
                <Menu />
            </MenuButton>

            <Drawer open ={open} onClose={handleClose} >
                {list()}
            </Drawer>

            <Component to= '/'>
                <img src={logoURL} alt="logo" style={{width:75}} />
                <Box style={{display:"flex"}}>
                <SubHeading>Explore&nbsp;
                    <Box component="span" style={{color:'#FFE500'}}>plus</Box>
                </SubHeading>
                <PlusImage src={subURL} alt="sub-logo" />
                </Box>
            </Component> 
            <Search/>
            <CustomButtonWrapper>
                    <CustomButtons/>
            </CustomButtonWrapper>
            </Toolbar>
            </StyledHeader>       
    )
}

export default Header ;




