import Signup from "./pages/Signup.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import './App.css';
import Login from "./pages/Login";

function App() {
  return (
    <Router>
    <div>
    <Switch>
      <Route exact path={["/","/members"]}>
    <Signup />
    </Route>
    <Route exact path={["/","/login"]}>
    <Login />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
