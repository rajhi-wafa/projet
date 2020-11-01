const mongoose =require("mongoose")
const schema = mongoose.Schema
const TicketSchema = new schema({
    date_ouverture:{type:Date,default:Date.now},
    dete_fermeture:{type:Date,default:Date.now},
    ouvert_fermet:{type:String},
    nature_interveention:{type:String}
})
module.exports=Ticket=mongoose.model('ticket',TicketSchema )