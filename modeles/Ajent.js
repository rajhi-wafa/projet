const mongoose =require("mongoose")
const schema = mongoose.Schema
const AjentSchema = new schema({
    name:{type:String},
    prenom:{type:String},
    login:{type:String},
    mdp:{type:String}

})
module.exports=Ajent=mongoose.model('ajent',AjentSchema )