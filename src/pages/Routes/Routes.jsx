import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../LayOut/Root';
import Home from '../Home/Home';


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export default router;