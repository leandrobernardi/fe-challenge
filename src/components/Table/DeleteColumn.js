import React from "react"
import { Delete } from "../Buttons"
import { Box } from "@mui/material"

const DeleteColumn = ({ row, deleteItem }) => {
  const { id } = row.values
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Delete onClick={() => deleteItem(id)} />
    </Box>
  )
}

export default DeleteColumn
