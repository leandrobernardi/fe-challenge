import React from "react"
import { Tooltip, Box, Typography } from "@mui/material"

const TypographyCell = ({ value: initialValue }) => {
  return (
    <Box sx={{ paddingTop: "8px !important" }}>
      <Tooltip title={initialValue} placement={"top-start"}>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {initialValue}
        </Typography>
      </Tooltip>
    </Box>
  )
}

export default TypographyCell
