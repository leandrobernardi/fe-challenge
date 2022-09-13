import React, { useEffect } from "react"
import { withStyles } from "@mui/styles"
import { Drawer, AppBar, Toolbar, List, Divider, Box, Typography } from "@mui/material"
import NavLink from "./NavLink"
import { Route, Switch, useLocation } from "wouter"
import CameraForm from "../../views/Cameras"
import CameraTypeForm from "../../views/CamerasType"
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera"
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid"
import SelectLanguage from "../SelectLanguage"
import { useTranslation } from "react-i18next"

const drawerWidth = 180

const styles = theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "180px",
    backgroundColor: "#0074b5 !important",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#0074b5",
    padding: "16px",
  },
})

function MainLayout(props) {
  const { t } = useTranslation()
  const [location, setLocation] = useLocation()
  const { classes } = props

  useEffect(() => {
    setLocation("/cameras-type")
  }, [])
  return (
    <Box className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar sx={{ ml: "180px", display: "flex", justifyContent: "space-between" }}>
          <Typography variant={"h4"}>Fe Challenge</Typography>
          <SelectLanguage />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Box sx={{ mt: "64px" }} />
        <Divider />
        <List>
          <NavLink href="/cameras" icon={PhotoCameraIcon} text={t("cameras")} />
          <NavLink href="/cameras-type" icon={FlipCameraAndroidIcon} text={t("camerasType")} />
        </List>
      </Drawer>
      <main>
        <Switch>
          <Route path="/cameras">
            <CameraForm />
          </Route>
          <Route path="/cameras-type">
            <CameraTypeForm />
          </Route>
          <Route path="/:anything*">
            <center>
              <Box sx={{ mt: "64px" }}>
                <b>404</b>
              </Box>
            </center>
          </Route>
        </Switch>
      </main>
    </Box>
  )
}

export default withStyles(styles)(MainLayout)
