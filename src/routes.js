import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import Main from "./Pages/main";
import Cometa from "./Pages/cometa";

const Routes = () => (

    <HashRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/cometas/:id" component={Cometa}></Route>
        </Switch>
    </HashRouter>

)

export default Routes;