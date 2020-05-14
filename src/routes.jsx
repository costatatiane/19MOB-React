import React from 'react';

// switch é responsável por fazer a troca entre as rotas
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search/index'
import Product from './pages/Product/index'

const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            component={ Search }
        />
        <Route
            exact
            path="/product/:id"
            component={ Product }
        />
        <Route
            component={() => (<div>Not found</div>)}
        />
    </Switch>
);

export default Routes;