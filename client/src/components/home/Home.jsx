import {Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";


// components import
import NavBar from "./Navbar";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productActions";

const Component = styled(Box)`

    padding:10px ;
    background : #F2F2F2 ;  
` ;
const Home =() =>{

  const {products} =  useSelector(state => state.getProducts)
    console.log(products);    

    const dispatch = useDispatch() ;

    useEffect( ()=> {
        dispatch(getProducts());

    },[dispatch])

    return (
        <>
             
            <NavBar/>

            <Component>

            <Banner />
            </Component>

        </>
    )  
}

export default Home ;