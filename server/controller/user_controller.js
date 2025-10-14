
// Custom Imports 
import User from '../model/user_schema.js'


export const userSignup =async(req,res)=>{

     try{

       const exists =  await User.findOne({username:req.body.username})
        if(exists){
            res.status(401).json({message:'Username already exists'}) ;
        }


        const user = req.body ;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({message:user});        
     }catch(error){
        res.status(500).json({message:error.message})
     }
}