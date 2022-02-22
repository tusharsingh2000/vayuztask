import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../screens";
import { ImageScreen } from "../screens/ImageScreen";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/image" component={ImageScreen} />
            </Switch>
        </BrowserRouter>
    )
}