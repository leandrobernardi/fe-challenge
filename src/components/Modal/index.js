import React from "react"
import { Box, Typography, Button, Divider, Modal } from "@mui/material"
import AddBoxIcon from "@mui/icons-material/AddBox"
import { Close as CloseButton } from "../Buttons"

const ModalNotSaved = ({ handleClose, children, isOpen, title }) => {
  return (
    <Modal onClose={handleClose} open={isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          bgcolor: "background.paper",
          boxShadow: 24,
          overflow: "auto",
          maxHeight: "800px",
          p: "24px",
          pb: "0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "50%", justifyContent: "space-between" }}>
            <AddBoxIcon color={"success"} fontSize="large" />
            <Typography variant={"h5"}>{title}</Typography>
          </Box>
          <Box sx={{ display: "flex", width: "50%", justifyContent: "flex-end" }}>
            <CloseButton onClick={handleClose} />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ m: "24px" }}>{children}</Box>
      </Box>
    </Modal>
  )
}

export default ModalNotSaved
