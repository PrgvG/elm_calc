import { combineReducers } from "redux"
import shaft from "./shaft"
import counterWeight from "./counterWeight"

const createRootReducer = () =>
  combineReducers({
    shaft,
    counterWeight,
  })

export default createRootReducer
