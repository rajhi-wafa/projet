import { combineReducers } from 'redux'
import reduceradmin from './reduceradmin'
import reducerajent from './reducerajent'
import reducerbts from './reducerbts'
import reducerticket from './reducerticket'




export default combineReducers({
    reducerticket,reducerbts,reducerajent,reduceradmin
  
})