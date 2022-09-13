import React from "react"
import { ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "wouter"
import Box from "@mui/material/Box"

function NavLink({ icon: Icon = null, text, href }) {
  return (
    <ListItem button>
      <Link href={href}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </Box>
      </Link>
    </ListItem>
  )
}

export default NavLink
