export const ADD_CAMERA_TYPE = "ADD_CAMERA_TYPE"
export const EDIT_CAMERA_TYPE = "EDIT_CAMERA_TYPE"
export const DELETE_CAMERA_TYPE = "DELETE_CAMERA_TYPE"
export const FILTER_CAMERA_TYPE = "FILTER_CAMERA_TYPE"
export const TOGGLE_CAMERA_TYPE_MODAL = "TOGGLE_CAMERA_TYPE_MODAL"

const addCameraTypeAction = payload => ({
  type: ADD_CAMERA_TYPE,
  payload,
})

const editCameraTypeAction = payload => ({
  type: EDIT_CAMERA_TYPE,
  payload,
})
const deleteCameraTypeAction = payload => ({
  type: DELETE_CAMERA_TYPE,
  payload,
})
const filterCameraTypeAction = payload => ({
  type: FILTER_CAMERA_TYPE,
  payload,
})
const toggleCameraTypeModalAction = payload => ({
  type: TOGGLE_CAMERA_TYPE_MODAL,
  payload,
})

export default {
  addCameraTypeAction,
  editCameraTypeAction,
  deleteCameraTypeAction,
  filterCameraTypeAction,
  toggleCameraTypeModalAction,
}
