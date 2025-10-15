// Default Imports 

import {Box,Typography,Menu,MenuItem ,styled} from '@mui/material' ;
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { toast } from "react-toastify";

// Custom CSS

const Component = styled(Menu)`
    margin-Top :5px ;
` ;

const Logout = styled(Typography)`
    font-Size : 14px;
    margin-left: 20px
` ;


const Profile = ({account,setAccount})=>{

    const [open,setOpen] = useState(false);

    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose =()=>{
        setOpen(false) ;

    }

    const LogoutUser =()=>{
        setAccount('');
        toast.success("Logged out successfully");

    }

    return (
     <>

     <Box onClick ={handleClick}>
                <Typography style = {{marginTop:2 ,cursor:'pointer'}}>{account}</Typography>
         </Box>
      <Component
            
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                
            >
                <MenuItem onClick={ ()=>{handleClose(); LogoutUser();}}>
                    <PowerSettingsNewIcon  color='primary' fontSize='small'/> 
                    <Logout> Logout </Logout>
                </MenuItem>
                
      </Component>

    
     </>   
    )
}

export default Profile ;