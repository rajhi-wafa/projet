const initstatead={
    admin:[]
}
export default function reduceradmin  (state=initstatead,action){
    switch(action.type){
        case GET_ADMIN:return{...state,admin:action.payload}
        default:return state
    }
}
