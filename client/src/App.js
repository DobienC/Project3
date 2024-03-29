import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import UserPage from "./pages/UserPage";
import Footer from "./components/Footer"
import CharacterCreation from "./pages/CharacterCreation";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/character/:id" component={Character} />
          <Route exact path="/user/:id" component={UserPage} />
          <Route exact path="/characterCreation" component={CharacterCreation} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
