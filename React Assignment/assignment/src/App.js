import React from 'react';
import './App.css'
import { RouterProvider,} from "react-router-dom";
import Routerdata from './commancomponent/Mainrouter'
const App = () => {
  return (
    <>
      <RouterProvider router={Routerdata} />
      </>
  );
};

export default App;