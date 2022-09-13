export const ADD_CAMERA = "ADD_CAMERA"
export const EDIT_CAMERA = "EDIT_CAMERA"
export const DELETE_CAMERA = "DELETE_CAMERA"
export const FILTER_CAMERA = "FILTER_CAMERA"
export const TOGGLE_CAMERA_MODAL = "TOGGLE_CAMERA_MODAL"

const addCameraAction = payload => ({
  type: ADD_CAMERA,
  payload,
})

const editCameraAction = payload => ({
  type: EDIT_CAMERA,
  payload,
})
const deleteCameraAction = payload => ({
  type: DELETE_CAMERA,
  payload,
})
const filterCameraAction = payload => ({
  type: FILTER_CAMERA,
  payload,
})
const toggleCameraModalAction = payload => ({
  type: TOGGLE_CAMERA_MODAL,
  payload,
})

export default {
  addCameraAction,
  editCameraAction,
  deleteCameraAction,
  filterCameraAction,
  toggleCameraModalAction,
}
