const express = require("express")
const router=express.Router()
const Ticket =require ("../modeles/Ticket")
//test
//localhost:5000/btss/test
//@path
//test route
//public/private

router.get('/test',(req,res)=>{
    res.send("tested")
})
//add ticket
router.post('/addTicket',(req,res)=>{
    const{date_ouverture,dete_fermeture,ouvert_fermet,nature_interveention}=req.body 
    const newTicket = new Ticket({date_ouverture,dete_fermeture,ouvert_fermet,nature_interveention})
newTicket.save()
.then(ticksts=>res.send(ticksts))
.catch(err=>console.log(err))})
//get all ticket
router.get('/allTicket',(req,res)=>{
    Ticket.find()
    .then(ticksts=>res.send(ticksts))
.catch(err=>console.log(err))
})

//delet ticket
router.delete("deleteTicket/:id",(req,res)=>{
    const {_id}=req.parames
    Ticket.findoneAndDelete({_id})
    .then(ticksts=>res.send(ticksts))
    .catch(err=>console.log(err))
})
//get ticket by id
router.get("/:_id",(req,res)=>{
    const{_id}=req.params
    Ticket.findOne({id})
    .then(ticksts=>res.send(ticksts))
    .catch(err=>console.log(err))
})

//edit ticket
router.put("/editTicket/:id",(req,res)=>{
    const{_id}=req.params
const{date_ouverture,dete_fermeture,ouvert_fermet,nature_interveention}=req.body
Ticket.findOneUpdate({_id},{$set:{date_ouverture,dete_fermeture,ouvert_fermet,nature_interveention}})
.then(ticksts=>res.send(ticksts))
    .catch(err=>console.log(err))



})


module.exports=router