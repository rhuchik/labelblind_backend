const express = require("express");
const router = express.Router();


router.post("/",async (req, res) => {
    try{
        const { amount} = req.body;
        user = new User({amount});
        await user.save();
    }catch (e) {
        console.error(e.message);
      }
  
      
    }
  );