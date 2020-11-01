const mongoose =require("mongoose")
const schema = mongoose.Schema
const AdminSchema = new schema({
    name:{type:String},
    login_admin:{type:String},
    passe_admin:{type:String}
})
module.exports=Administrateur=mongoose.model('admin',AdminSchema )