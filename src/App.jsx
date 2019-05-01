import React from "react";
import { HashRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import Login from "./compenent/login";
import Home from "./compenent/home";
export default class App extends React.Component {
render() {
    return (
        <Router>
        <div className="App">
                <Login/>
                <Home/>

        </div>

        
        <Switch>
            <Redirect exact path="/" to="/home"></Redirect>
            <Route path="/login"></Route>
            <Route path="/home"></Route>
        </Switch>
        </Router>
    );
}


}
