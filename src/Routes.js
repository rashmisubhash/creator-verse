import React from 'react';
import { useRoutes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; 
import AddCreator from './pages/AddCreator';
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";


function Routes({ creators }) {
  const routes = useRoutes([
    { path: '/', element: <LandingPage creators = {creators} /> },
    { path: '/view/:id', element: <ViewCreator /> },
    { path: 'add-creator', element: <AddCreator /> },
    {path: 'creators', element: <ShowCreators creators = {creators} />}
  ]);

  return routes;
}

export default Routes;
