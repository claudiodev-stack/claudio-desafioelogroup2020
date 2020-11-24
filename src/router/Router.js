import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import Register from '../view/Register';
import Login from '../view/Login';
import Lead from '../view/Lead';
import NovoLead from '../view/NovoLead';

function Routes() {
    return (
        < BrowserRouter >
            <Switch>
                <Route path="/" exact component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/lead" component={Lead}></Route>
                <Route path="/novolead" component={NovoLead}></Route>
            </Switch>
        </BrowserRouter >
    );
};

export default Routes;