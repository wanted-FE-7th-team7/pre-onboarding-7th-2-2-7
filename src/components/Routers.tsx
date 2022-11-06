import React from 'react';
import { Route, Routes } from 'react-router';
import { RouteType } from '../utils/routes';

interface Props {
  routes: RouteType[];
}

function Routers({ routes }: Props) {
  return (
    <Routes>
      {routes.map(route => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  );
}

export default Routers;
