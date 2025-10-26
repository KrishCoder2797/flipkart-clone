import Product from '../model/product_schema.js' ; 

export const getProducts = async(req,res)=>{

    try{
        const products = await Product.find({})  // Will fetch all data present in collection
        res.status(200).json(products) ;
    }catch(error){
        res.status(500).json({message :error.message}) ;
    }

}