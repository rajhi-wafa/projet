const express = require("express")
const router=express.Router()
const Ajent=require("../modeles/Ajent")
//test
//localhost:5000/btss/test
//@path
//test route
//public/private

router.get('/test',(req,res)=>{
    res.send("tested")
})
//add ajent
router.post('/addAjent',(req,res)=>{
    const{ name,prenom,login,mdp}=req.body 
    const newAjent = new Ajent({name,prenom,login,mdp})
newAjent.save()
.then(ajents=>res.send(ajents))
.catch(err=>console.log(err))})

//get all ajent
router.get('/allAjent',(req,res)=>{
    Ajent.find()
    .then(ajents=>res.send(ajents))
.catch(err=>console.log(err))
})

//delet ajent

router.delete("deleteAjent/:id",(req,res)=>{
    const {_id}=req.parames
    Ajent.findoneAndDelete({_id})
    .then(ajents=>res.send(ajents))
    .catch(err=>console.log(err))
})
//get admin by id
router.get("/:_id",(req,res)=>{
    const{_id}=req.params
    Ajent.findOne({id})
    .then(ajents=>res.send(ajents))
    .catch(err=>console.log(err))
})

//edit admin
router.put("/editAjent/:id",(req,res)=>{
    const{_id}=req.params
const{name,prenom,login,mdp}=req.body
Ajent.findOneUpdate({_id},{$set:{name,prenom,login,mdp}})
.then(ajents=>res.send(ajents))
    .catch(err=>console.log(err))



})


module.exports=router