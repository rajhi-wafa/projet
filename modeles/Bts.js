const mongoose =require("mongoose")
const schema = mongoose.Schema
const BtsSchema = new schema({
    nome_bts:{type:String},
    adresse:{type:String},
    DMES:{type:Date,default:Date.now},
    Transsmission:{type:Number},
    configurations:{type:String},
    Bonde:{type:Number}
})
module.exports=Bts=mongoose.model('bts',BtsSchema )