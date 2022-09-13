import React from "react"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import DeleteIcon from "@mui/icons-material/Delete"
import CloseIcon from "@mui/icons-material/Close"
import { Tooltip, IconButton } from "@mui/material"
import { useTranslation } from "react-i18next"

const AddButtonCircle = ({ onClick }) => {
  const { t } = useTranslation()
  return (
    <Tooltip title={t("addNew")} placement="top">
      <IconButton onClick={onClick}>
        <AddCircleIcon
          fontSize="large"
          sx={{
            width: "32px",
            color: "#0074b5",
            borderRadius: "50%",
          }}
        />
      </IconButton>
    </Tooltip>
  )
}
const Delete = ({ onClick }) => {
  const { t } = useTranslation()
  return (
    <Tooltip title={t("delete")} placement="right">
      <IconButton color="error" onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  )
}

const Close = ({ onClick }) => {
  const { t } = useTranslation()
  return (
    <Tooltip title={t("close")} placement="top">
      <IconButton onClick={onClick}>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  )
}
export { AddButtonCircle, Delete, Close }
