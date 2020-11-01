const express = require("express")
const router=express.Router()
const Administrateur=require("../modeles/Administrateur")
//test
//localhost:5000/btss/test
//@path
//test route
//public/private

router.get('/test',(req,res)=>{
    res.send("tested")
})
//add admin
router.post('/addAdmin',(req,res)=>{
    const{name,login_admin,passe_admin}=req.body 
    const newAdministrateur = new Administrateur({name,login_admin,passe_admin})
newAdministrateur.save()
.then(admins=>res.send(admins))
.catch(err=>console.log(err))
})
//get all admin
router.get('/allAdmin',(req,res)=>{
    Administrateur.find()
    .then(admins=>res.send(admins))
.catch(err=>console.log(err))
})
//delet admin
router.delete("deleteAdmin/:id",(req,res)=>{
    const {_id}=req.parames
    Administrateur.findoneAndDelete({_id})
    .then(admins=>res.send(admins))
    .catch(err=>console.log(err))
})
//get admin by id
router.get("/:_id",(req,res)=>{
    const{_id}=req.params
    Administrateur.findOne({id})
    .then(admins=>res.send(admins))
    .catch(err=>console.log(err))
})

//edit admin
router.put("/editAdmin/:id",(req,res)=>{
    const{_id}=req.params
const{name,login_admin,passe_admin}=req.body
Administrateur.findOneUpdate({_id},{$set:{name,login_admin,passe_admin}})
.then(admins=>res.send(admins))
    .catch(err=>console.log(err))



})
module.exports=router