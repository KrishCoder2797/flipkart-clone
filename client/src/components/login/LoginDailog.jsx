
import {Dialog,Box,TextField,Typography,Button,styled} from '@mui/material';

// Custom CSS

const Component = styled(Box)`
    height:100% ;
    width:100% ;


` ;

const Image = styled(Box)`

  background : #2874f0  url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 60% no-repeat;
  height : 100% ;
  width: 30% ;
  padding:45px 35px ;
  & > p , & > h5{
      color:#FFFFFF ;
      font-weight:600;
        }
` ;

const Wrapper = styled(Box)`


display:flex ;
flex-direction:column ;
 padding:25px 45px ;
 flex :1 ;
 & > div , & > button , & > p (
      margin-top:20px ;
 )
`;

const LoginButton = styled(Button)`

    text-transform:none ;
    margin-top:10px ;
    margin-bottom:10px ;
    background : #FB641B ;
    color: #fff ;
    height:48px ;
    border-radius:2px ;


`;

const RequestOTP = styled(Button)`

    text-transform:none ;
    margin-top:10px ;
    margin-bottom:10px ;
    background : #fff ;
    color: #2874f0 ;
    height:48px ;
    border-radius:2px ;
    box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);


`;

const Text = styled(Typography)`

    font-size:12px ;
    color:#878787 ;     

` ;

const CreateAccount = styled(Typography)`

    font-size:14px ;
    text-align:center ;
    color:#2874f0 ;
    font-weight:600;
    /* When hover cursor becomes pointer*/
    cursor: pointer ; 
` ;


const LoginDailog = ({open,setOpen})=> {
// Toggling the Login Page if we are Click anywhere else Login window should disappear 
  const handleClose =()=>{
    setOpen(false) ;
  }

  return (
    <Dialog open ={open} onClose={handleClose} PaperProps={{
    sx: {
      height: '80vh',
      width: '110vh',
      maxWidth: 'none',
      overflow: 'hidden'  
        }
  }} >
        <Component>
          <Box style={{display:'flex',height:'100%'}} >
              <Image>
                <Typography variant='h5'>Login</Typography>
                <Typography style={{marginTop:20}}>Get access to your Orders, Wishlist and Recommendations </Typography>
              </Image>
              <Wrapper>
                    <TextField  variant='standard' label="Enter Email/Mobile Number"/>
                    <TextField  variant='standard' label="Enter Password"/>
                    <Text>By continuing, you agree to Flipkart's Term of Use and Privacy Policy</Text>
                    <LoginButton>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount>New to Flipkart ? Create an account ? </CreateAccount>
              </Wrapper>

          </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDailog ;