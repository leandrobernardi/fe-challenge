import * as actions from "../actions/camera"
import { append, filter, update } from "ramda"
import { v4 as uuidv4 } from "uuid"

const initialState = {
  data: [
    {
      id: "19ee62a9-69a1-4dd9-a481-de5a43004977",
      name: "camara 1",
      location: "argentina",
      cameraType: "325ded41-06a9-486e-9bda-f6c2b67aaa03",
      latitude: 20,
      longitude: 120,
      brand: "marca 1",
      model: "modelo 1",
    },
    {
      id: "526f0d30-3cd7-4c9b-b0b6-5519a3655d9b",
      name: "camara 2",
      location: "brasil",
      cameraType: "ad7521d8-5a4b-4c9e-bfb1-d36ede55d4db",
      latitude: 30,
      longitude: 130,
      brand: "marca 2",
      model: "modalo 2",
    },
  ],
  dataFiltered: [],
  query: "",
  isOpenModal: false,
}

const setAddCamera = (state, camera) => {
  console.log(camera)
  const { data } = state
  const id = uuidv4()
  const { name, location, cameraType, latitude, longitude, brand, model } = camera.payload
  const newCamera = { id, name, location, cameraType, latitude, longitude, brand, model }
  return append(newCamera, data)
}

const editAddCamera = (state, row) => {
  const { data } = state
  const { rowIndex, columnId, value } = row.payload
  const updatedItem = { ...data[rowIndex], [columnId]: value }
  return update(rowIndex, updatedItem, data)
}

const deleteAddCamera = (state, idSelected) => {
  const { data } = state
  const id = idSelected.payload
  const isEqual = cameraType => cameraType.id !== id
  return filter(isEqual, data)
}

const filterAddCamera = (state, value) => {
  const { data } = state
  const searchedValue = value.payload

  const filteredCamerasType = (list, query) => {
    if (query === "") {
      return data
    } else {
      const filteredCountries = list.filter(cameraType => {
        const filterName = cameraType.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        const filterLocation = cameraType.location.toLowerCase().indexOf(query.toLowerCase()) !== -1
        const filterBrand = cameraType.brand.toLowerCase().indexOf(query.toLowerCase()) !== -1
        const filterModel = cameraType.model.toLowerCase().indexOf(query.toLowerCase()) !== -1
        return filterName || filterLocation || filterBrand || filterModel
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
    case actions.ADD_CAMERA:
      return {
        ...state,
        data: setAddCamera(state, action),
      }
    case actions.EDIT_CAMERA:
      return {
        ...state,
        data: editAddCamera(state, action),
      }
    case actions.DELETE_CAMERA:
      return {
        ...state,
        data: deleteAddCamera(state, action),
      }
    case actions.FILTER_CAMERA:
      return {
        ...state,
        ...filterAddCamera(state, action),
      }
    case actions.TOGGLE_CAMERA_MODAL:
      return {
        ...state,
        isOpenModal: toggleIsOpenModal(state),
      }
    default:
      return state
  }
}
