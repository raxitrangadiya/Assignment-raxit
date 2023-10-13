import React from 'react';
import { useRoutes } from 'react-router-dom';
import Hooksmenu from './Hooksmenu';
import Intro from './Hooksmenu/Intro.jsx';
import Usestate from './Hooksmenu/Usestateexample';
import Useeffect from './Hooksmenu/Useeffect.jsx';
import Uselayouteffect from './Hooksmenu/Uselayouteffectexample.jsx';
import UseContextexample from './Hooksmenu/UseContextexample.jsx';
import UseReducerexample from './Hooksmenu/UseReducerexample.jsx';
import UseCallbackexample from './Hooksmenu/UseCallbackexample.jsx';
import UseMemoexample from './Hooksmenu/UseMemoexample.jsx';
import Userefexample from './Hooksmenu/Userefexample.jsx';
import UseimperativeHandleexample from './Hooksmenu/UseimperativeHandleexample.jsx';
import UseDebugValueexample from './Hooksmenu/UseDebugValueexample.jsx';
import UseDeferredValueexample from './Hooksmenu/UseDeferredValueexample.jsx';

const Hooks = () => {
    const routes = useRoutes([{
        path: '/',
        element: <Hooksmenu />,
        children: [
            {
                path: "hooksintro",
                element: <Intro />
            },
            {
                path: "usestate",
                element: <Usestate />
            },
            {
                path: "useeffect",
                element: <Useeffect />
            },
            {
                path: "uselayouteffect",
                element: <Uselayouteffect />
            },
            {
                path: "usecontest",
                element: <UseContextexample />
            },
            {
                path: "usereducer",
                element: <UseReducerexample />
            },
            {
                path: "usecallback",
                element: <UseCallbackexample />
            },
            {
                path: "usememo",
                element: <UseMemoexample />
            },
            {
                path: "useref",
                element: <Userefexample />
            },
            {
                path: "useimparetive",
                element: <UseimperativeHandleexample />
            },
            {
                path:"usedebug",
                element:<UseDebugValueexample/>
            },
            {
                path:"usedefer",
                element:<UseDeferredValueexample/>
            }
        ]
    }])
    return (
        routes
    );
};

export default Hooks;