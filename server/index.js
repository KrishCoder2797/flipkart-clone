//const express = require('express')
import express from 'express' ;
import dotenv from 'dotenv' ;
import cors from 'cors' ; 
import {v4 as uuid} from 'uuid' ;



// Custom imports
import Connection from './database/db.js' ;
import DefaultData from './default.js';
import Router from './routes/routes.js' ;
import razorpayRoutes from "./routes/razorpay-route.js";

const app = express() ;

dotenv.config() ;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false })) ;
app.use('/',Router);
app.use("/payment", razorpayRoutes);
const PORT = 4000 ; 

const USERNAME = process.env.DB_USERNAME ;
const PASSWORD = process.env.DB_PASSWORD ;

Connection(USERNAME,PASSWORD) ;


app.listen(PORT,()=>{
    console.log(`Server started at port number ${PORT}`)

});

DefaultData() ;


export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY ; 
export let paytmParams = {} ;
paytmParams['MID'] = process.env.PAYTM_MID ;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE ;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID ;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID ;
paytmParams['MID'] = process.env.PAYTM_MID ;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = 'CUST' +uuid()  ;
paytmParams['TXN_AMOUNT'] = '100' ;
paytmParams['CALLBACK_URL'] = 'http://localhost:4000/callback' ;
paytmParams['EMAIL'] = 'krushnagajare.99@gmail.com' ;
paytmParams['MOBILE_NO'] = '8830109545' ;


