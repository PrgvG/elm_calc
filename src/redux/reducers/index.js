import { combineReducers } from "redux"
import shaft from "./shaft"
import counterWeight from "./counterWeight"
import entrance from "./entrance"

const createRootReducer = () =>
  combineReducers({
    shaft,
    counterWeight,
    entrance,
  })

export default createRootReducer
