import React from "react"
import { TextField } from "@mui/material"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const EditableCell = ({ value: initialValue, row: { index }, column: { id }, updateItem, schemeIndividual }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      [id]: initialValue,
    },
    mode: "onBlur",
    resolver: yupResolver(schemeIndividual[id]),
  })

  const { errors } = formState

  const onBlur = data => {
    if (data[id] !== initialValue) {
      updateItem(index, id, data[id])
    }
  }

  const checkType = () => {
    if (schemeIndividual[id].fields[id].type === "number") {
      return "number"
    } else {
      return "text"
    }
  }

  return (
    <form onBlur={handleSubmit(onBlur)}>
      <TextField
        variant={"standard"}
        onBlur={onBlur}
        type={checkType()}
        fullWidth
        size={"small"}
        error={!!errors[id]}
        helperText={errors[id]?.message}
        inputProps={{ style: { textAlign: "left" } }}
        {...register(id)}
      />
    </form>
  )
}

export default EditableCell
