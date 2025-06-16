import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../src/App';

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: []
    }
])

export default AllRoutes;