import React from "react"
import { Paper, InputBase, IconButton } from "@mui/material"

import SearchIcon from "@mui/icons-material/Search"
import { useTranslation } from "react-i18next"

function SearchInput({ handleOnChange }) {
  const { t } = useTranslation()
  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "95%",
        mt: "16px",
        mb: "16px",
        justifyContent: "center",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} onChange={handleOnChange} placeholder={t("search")} />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchInput
