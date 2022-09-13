import React from "react"
import { MenuItem, Select } from "@mui/material"
import { useSelector } from "react-redux"

const EditableCell = ({ value: initialValue, row: { index }, column: { id }, updateItem }) => {
  const state = useSelector(state => state)

  const handleOnchange = data => {
    if (data.target.value !== initialValue) {
      updateItem(index, id, data.target.value)
    }
  }

  return (
    <Select fullWidth defaultValue={initialValue} onChange={handleOnchange} variant={"standard"}>
      {state.cameraType.data.map(cameraType => (
        <MenuItem key={cameraType.id} value={cameraType.id}>
          {cameraType.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default EditableCell
