// Routes.js
import React from 'react';
import { useRoutes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; 
// import EditPage from './pages/EditPage'; 
// import ViewPage from './pages/ViewPage'; 
import AddCreator from './pages/AddCreator';
import ShowCreators from "./pages/ShowCreators";



function Routes({ creators }) {
  // Define your routes
  const routes = useRoutes([
    { path: '/', element: <LandingPage creators = {creators} /> },
    // { path: 'edit', element: <EditPage /> },
    // { path: 'view', element: <ViewPage /> },
    { path: 'add-creator', element: <AddCreator /> },
    {path: 'creators', element: <ShowCreators creators = {creators} />}
  ]);

  return routes;
}

export default Routes;
