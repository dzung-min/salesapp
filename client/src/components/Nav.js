import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  root: {
    backgroundColor: "#333",
  },
}))

function Nav() {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root}>
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Sales
          </Typography>
          <Link to="/signin" className={classes.link}>
            <Button color="inherit">Sign In</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav
