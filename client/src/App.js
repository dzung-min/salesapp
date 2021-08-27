import { CssBaseline } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./components/Home"
import Nav from "./components/Nav"
import SignIn from "./components/SignIn"

function App() {
  return (
    <div>
      <Router>
        <CssBaseline />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
