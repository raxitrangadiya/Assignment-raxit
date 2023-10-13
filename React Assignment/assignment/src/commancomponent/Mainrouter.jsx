import { createBrowserRouter } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
// import React, { Suspense } from "react";
import Module9 from './Navbar/Module9.jsx'
import Module10 from './Navbar/Module10.jsx'
import Module11 from './Navbar/Module11.jsx'
import Module12 from './Navbar/Module12.jsx'
import Module13 from './Navbar/Module13.jsx'
import Lifecycle from './Navbar/Module10/Lifecycle.jsx'
import Hooks from './Navbar/Module10/Hooks.jsx'
import { Suspense } from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <><Navbar/></>
    },
    {
        path: '/module9',
        element: <><Navbar/><Module9 /></>
    },
    {
        path: '/module10',
        element: <><Navbar/><Module10 /></>,
        children:[
            {
                path:"lifecycle/*",
                element:<Suspense><Lifecycle/></Suspense>
            },
            {
                path:"hooks/*",
                element:<Suspense><Hooks/></Suspense>
            },

        ]
    },
    {
        path: '/module11',
        element: <><Navbar/><Module11 /></>
    },
    {
        path: '/module12',
        element: <><Navbar/><Module12 /></>
    },
    {
        path: '/module13',
        element: <><Navbar/><Module13 /></>
    }

])
export default router;