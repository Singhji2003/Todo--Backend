const express = require('express')
const Data =  require('../models/dataSchema')
const router = express.Router();
// Adding the Names
router.post('/adddata', (req,res)=>{
    const data = Data(req.body);
    data.save();
 res.send(req.body)
 console.log(req.body)
})

// fetching all Names
router.get('/getdata', async(req,res)=>{
const user = await Data.find(Data.user).select()
   res.send(user)
})

// Delete the Name
router.delete('/dlt/:id', async(req, res)=>{
    let data = await Data.find(Data.user).select();
    data.map(async(e)=>{
        if( req.params.id == e._id){
            data = await Data.findByIdAndDelete(req.params.id)
            res.send('success')
        }
    })
})
module.exports = router;