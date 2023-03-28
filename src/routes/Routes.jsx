
import React from 'react';
import { Route, Routes as Switch } from "react-router-dom";
import { Routers } from '../pages';
import { mainPath } from '../service/path';

export default function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path={mainPath.auth} element={<Routers.AuthRoutes />} />
                <Route path={mainPath.layout} element={<Routers.LayoutRoutes />} />
            </Switch>
        </React.Fragment>
    )
}
