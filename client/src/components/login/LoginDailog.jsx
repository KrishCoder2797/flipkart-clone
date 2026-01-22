
import {Dialog,Box,TextField,Typography,Button,styled} from '@mui/material';
import { useState , useContext } from 'react';
import { toast } from "react-toastify";

// UserDefined Import 

import { authenticateSignup,authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

// Custom CSS

const Component = styled(Box)`
    height:100% ;
    width:100% ;


` ;

const Image = styled(Box)`

  background : #2874f0  url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 60% no-repeat;
  height : 100% ;
  width: 28% ;
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
    margin-Top : 20px ;
    margin-Bottom:20px ;    

` ;

const CreateAccount = styled(Typography)`

    font-size:14px ;
    text-align:center ;
    color:#2874f0 ;
    font-weight:600;
    /* When hover cursor becomes pointer*/
    cursor: pointer ; 
` ;

const accountInitialValue = {
    login:{
      view:'login' ,
      heading:"Login",
      subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup :{
      view:'signup',
      heading: "Looks like you're new here !",
      subHeading:"Sign up with your mobile number to get started"
    }

}

const signupInitial = {

  firstname :'',
  lastname : '',
  username :'',
  email :'',
  password :'',
  phone :''
}

const loginInitialValues = {

  username :'',
  password :''
}

const LoginDailog = ({open,setOpen})=> {
// Creating State for Toggling Login and Register
  const [account,toggleAccount] = useState(accountInitialValue.login) ;

  
// Creating state to Store Input Field from Registration
const [signup,setSignup] = useState(signupInitial) ;
const [login,setLogin] = useState(loginInitialValues) ;


// Extracting value data Context 
const {setAccount} =useContext(DataContext);

// Toggling the Login Page if we are Click anywhere else Login window should disappear 
  const handleClose =()=>{
    setOpen(false) ;
    toggleAccount(accountInitialValue.login);
  }

  const toggleSignUp = ()=>{
    toggleAccount(accountInitialValue.signup) ;
  }

  const onInputChange = (e)=>{
    // ...signup -> SpreadOperator 
    setSignup({...signup,[e.target.name]:e.target.value})
    
  }

  const signUpUser = async()=>{
     let response = await authenticateSignup(signup);
     if(!response) return ;
     handleClose();
     setAccount(signup.firstname);
  }

 const onValueChange = (e)=>{
    setLogin({...login, [e.target.name]:e.target.value})
 } 

 const loginUser = async()=>{
  let response =  await authenticateLogin(login);
   console.log(response); 
   if(response.status === 200){
    handleClose();
    setAccount(response.data.data.firstname);
    toast.success("Login Successful");
   }else{
      
      toast.error("Please enter valid username or password");
   }
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
                <Typography variant='h5'>{account.heading}</Typography>
                <Typography style={{marginTop:20}}>{account.subHeading} </Typography>
              </Image>
              { account.view === 'login' ? 
                    <Wrapper>
                          <TextField  variant='standard' onChange={(e)=>onValueChange(e)} name= 'username' label="Enter User Name"/>
                          <TextField  variant='standard' onChange={(e)=>onValueChange(e)} name= 'password' label="Enter Password"/>
                          <Text>By continuing, you agree to ShopEase's Term of Use and Privacy Policy</Text>
                          <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                          <Typography style={{textAlign:'center'}}>OR</Typography>
                          <RequestOTP>Request OTP</RequestOTP>
                          <CreateAccount onClick={()=> toggleSignUp()}>New to ShopEase ? Create an account ? </CreateAccount>
                    </Wrapper>

                    :

                          <Wrapper>
                          <TextField  variant='standard' onChange={(e)=>onInputChange(e)} name= 'firstname' label="Enter First Name"/>
                          <TextField  variant='standard' onChange={(e)=>onInputChange(e)} name='lastname' label="Enter Last Name"/>
                          <TextField  variant='standard' onChange={(e)=>onInputChange(e)} name='username' label="Enter Username"/>
                          <TextField  variant='standard' onChange={(e)=>onInputChange(e)} name= 'email' label="Enter Email"/>
                          <TextField  variant='standard' onChange={(e)=>onInputChange(e)} name= 'password' label="Enter Password"/>
                          <TextField  variant='standard' onChange={(e)=>onInputChange(e)} name= 'phone' label="Enter Phone"/>
                          <LoginButton onClick={()=> signUpUser()}>Continue</LoginButton>
                          
                    </Wrapper>

              }

          </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDailog ;