import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../LayOut/Root';
import Home from '../Home/Home';
import Error from '../../components/Error/Error';
import Error2 from '../../components/Error/Error2';
import Products from '../Products/Products';
import WishList from '../WishList/WishList';


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: Error,
        hydrateFallbackElement: <p>Loading ...</p>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: 'wishList',
                element: <WishList></WishList>
            }
        ]
    },
    {
        path: '*',
        Component: Error2
    }
])

export default router;