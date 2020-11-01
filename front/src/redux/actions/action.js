import {GET_BTS} from "./actionTypes";
import {GET_TICKET} from "./actionTypes";
import {GET_ADMIN} from "./actionTypes";
import {GET_AJENT} from "./actionTypes";
import axios from "axios"

//get bts
export const getBts=()=>dispatch=>{
    axios.get('/btss/allBts')
    .then(res=>dispatch({type:GET_BTS,payload:res.data}))
    .catch(err=>console.log(err))
}
export const addBts =(newBts)=>dispatch=>{
    axios.post('/btss/addBts',newBts)
    .then(res=>dispatch(getBts()))
    .catch(err=>console.log(err))
}
//delet bts
export const deletBts =(idBts)=>dispatch=>{
    axios.delete(`/btss/deleteBts/${idBts}`)
    .then(res=>dispatch(getBts()))
    .catch(err=>console.log(err))
}
//edit bts
export const putBts=(idBts,updatedBts)=>dispatch=>{
    axios.put(`/btss/editBts ${idBts}`,updatedBts)
    .then(res=>dispatch(getBts()))
    .catch(err=>console.log(err))
}


//get ticket
export const getTicket=()=>dispatch=>{
    axios.get('/ticksts/allTicket')
    .then(res=>dispatch({type:GET_TICKET,payload:res.data}))
    .catch(err=>console.log(err))
}
//add Tiket
export const addTicket=(newTicket)=>dispatch=>{
    axios.post('/ticksts/allTicket',newTicket)
    .then(res=>dispatch(getTicket()))
    .catch(err=>console.log(err))
}
//delet ticket
export const deleteTicket =(idTicket)=>dispatch=>{
    axios.delete(`/ticksts/deleteTicket/${idTicket}`)
    .then(res=>dispatch(getTicket()))
    .catch(err=>console.log(err))
}
//edit ticket
export const putTicket=(idTicket,updatedTiket)=>dispatch=>{
    axios.put(`/ticksts/editTicket/ ${idTicket}`,updatedTiket)
    .then(res=>dispatch(getTicket()))
    .catch(err=>console.log(err))
}

//get admin
export const getAdmin=()=>dispatch=>{
    axios.get('/admins/allAdmin')
    .then(res=>dispatch({type:GET_ADMIN,payload:res.data}))
    .catch(err=>console.log(err))
}
//add admin
export const addAdmin=(newAdministrateur)=>dispatch=>{
    axios.post('/admins/allAdmin',newAdministrateur)
    .then(res=>dispatch(getAdmin()))
    .catch(err=>console.log(err))

}
//delet admin
export const deleteAdmin =(idAdmin)=>dispatch=>{
    axios.delete(`/admins/deleteAdmin/${idAdmin}`)
    .then(res=>dispatch(getAdmin()))
    .catch(err=>console.log(err))
}
//edit admin
export const putAdmin=(idAdmin,updatedAdmin)=>dispatch=>{
    axios.put(`/admins/editAdmin/${idAdmin}`,updatedAdmin)
    .then(res=>dispatch(getAdmin()))
    .catch(err=>console.log(err))
    }

//get ajent
export const getAjent=()=>dispatch=>{
    axios.get('/ajents/allAjent')
    .then(res=>dispatch({type:GET_AJENT,payload:res.data}))
    
    .catch(err=>console.log(err))
}
export const addAjent=(newAjent)=>dispatch=>{
    axios.post('/ajents/allAjent',newAjent)
    .then(res=>dispatch( getAjent()))
    
    .catch(err=>console.log(err))
}
//delet ajent
export const deleteAjent =(idAjent)=>dispatch=>{
    axios.delete(`/ajents/deleteAjent/${idAjent}`)
    .then(res=>dispatch( getAjent()))
    .catch(err=>console.log(err))
}
//edit admin
export const putAmin=(idAjent,updatedAjent)=>dispatch=>{
    axios.put(`/ajents/editAjent/${idAjent}`,updatedAjent)
    .then(res=>dispatch( getAjent()))
    .catch(err=>console.log(err))
}
    