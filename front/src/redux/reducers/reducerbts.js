const initstate={
    bts:[]
}
export default function reducerbts  (state=initstate,action){
    switch(action.type){
        case GET_BTS:return{...state,bts:action.payload}
        default:return state
    }
}