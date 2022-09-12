import { combineReducers } from "redux"
import camera from "./camera"
import cameraType from "./cameraType"

export default combineReducers({
  camera,
  cameraType,
})
