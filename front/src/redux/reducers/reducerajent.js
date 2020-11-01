const initstatea={
    ajent:[]
}
export default function reducerajent (state=initstatea,action){
    switch(action.type){
        case GET_AJENT:return{...state,ajent:action.payload}
        default:return state
    }
}