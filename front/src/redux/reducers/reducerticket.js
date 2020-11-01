const initstatetaaa={
    ticket:[]
}
export default function reducerticket (state=initstatetaaa,action){
    switch(action.type){
        case  GET_TICKET:return{...state,ticket:action.payload}
        default:return state
    }
}