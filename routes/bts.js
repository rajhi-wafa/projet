const express = require("express")
const router=express.Router()
const Bts =require("../modeles/Bts")
//test
//localhost:5000/btss/test
//@path
//test route
//public/private

router.get('/test',(req,res)=>{
    res.send("tested")
})
//add bts
router.post('/addBts',(req,res)=>{
    const{ nome_bts,adresse,DMES,Transsmission,configurations,Bonde}=req.body 
    const newBts = new Bts({nome_bts,adresse,DMES,Transsmission,configurations,Bonde })
newBts.save()
.then(btss=>res.send(btss))
.catch(err=>console.log(err))
})
//get all bts
router.get('/allBts',(req,res)=>{
    Bts.find()
    .then(btss=>res.send(btss))
.catch(err=>console.log(err))
})
//delet bts
router.delete("deleteBts/:id",(req,res)=>{
    const {_id}=req.parames
    Bts.findoneAndDelete({_id})
    .then(btss=>res.send(btss))
    .catch(err=>console.log(err))
})
//get bts by id
router.get("/:_id",(req,res)=>{
    const{_id}=req.params
    Bts.findOne({id})
    .then(btss=>res.send(btss))
    .catch(err=>console.log(err))
})

//edit bts
router.put("/editBts/:id",(req,res)=>{
    const{_id}=req.params
const{nome_bts,adresse,DMES,Transsmission,configurations,Bonde}=req.body
Bts.findOneUpdate({_id},{$set:{ nome_bts,adresse,DMES,Transsmission,configurations,Bonde}})
.then(btss=>res.send(btss))
    .catch(err=>console.log(err))



})
module.exports=router