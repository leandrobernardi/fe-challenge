import * as actions from "../actions/cameraType"
import { v4 as uuidv4 } from "uuid"
import { append, filter, update } from "ramda"

const initialState = {
  data: [
    {
      id: "325ded41-06a9-486e-9bda-f6c2b67aaa03",
      name: "tipo 1",
      description: "descripcion tipo 1",
    },
    {
      id: "ad7521d8-5a4b-4c9e-bfb1-d36ede55d4db",
      name: "tipo 2",
      description: "descripcion tipo 2",
    },
    {
      id: "ad7521d8-5a4b-4c9e-bfb1-d36ede55d4dc",
      name: "tipo 3",
      description: "descripcion tipo 3",
    },
  ],
  dataFiltered: [],
  query: "",
  isOpenModal: false,
}

const setAddCameraType = (state, camera) => {
  const { data } = state
  const id = uuidv4()
  const { name, description } = camera.payload
  const newCamera = { id, name, description }
  return append(newCamera, data)
}

const editAddCameraType = (state, row) => {
  const { data } = state
  const { rowIndex, columnId, value } = row.payload
  const updatedItem = { ...data[rowIndex], [columnId]: value }
  return update(index, updatedItem, data)
}

const deleteAddCameraType = (state, idSelected) => {
  const { data } = state
  const id = idSelected.payload
  const isEqual = cameraType => cameraType.id !== id
  return filter(isEqual, data)
}

const filterAddCameraType = (state, value) => {
  const { data } = state
  const searchedValue = value.payload

  const filteredCamerasType = (list, query) => {
    if (query === "") {
      return data
    } else {
      const filteredCountries = list.filter(cameraType => {
        const filterName = cameraType.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        const filterDescription = cameraType.description.toLowerCase().indexOf(query.toLowerCase()) !== -1
        return filterName || filterDescription
      })

      return filteredCountries
    }
  }
  return { dataFiltered: filteredCamerasType(data, searchedValue), query: searchedValue }
}

const toggleIsOpenModal = state => {
  const { isOpenModal } = state

  return !isOpenModal
}

export default function cameraTypeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_CAMERA_TYPE:
      return {
        ...state,
        data: setAddCameraType(state, action),
      }
    case actions.EDIT_CAMERA_TYPE:
      return {
        ...state,
        data: editAddCameraType(state, action),
      }
    case actions.DELETE_CAMERA_TYPE:
      return {
        ...state,
        data: deleteAddCameraType(state, action),
      }
    case actions.FILTER_CAMERA_TYPE:
      return {
        ...state,
        ...filterAddCameraType(state, action),
      }
    case actions.TOGGLE_CAMERA_TYPE_MODAL:
      return {
        ...state,
        isOpenModal: toggleIsOpenModal(state),
      }
    default:
      return state
  }
}
