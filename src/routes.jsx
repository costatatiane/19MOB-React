import React from 'react';

// switch é responsável por fazer a troca entre as rotas
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search/index'

const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            component={ Search }
        />
        <Route
            component={() => (<div>Not found</div>)}
        />
    </Switch>
);

export default Routes;