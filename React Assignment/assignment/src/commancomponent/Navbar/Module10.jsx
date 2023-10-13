import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Module10 = () => {
    return (
        <div>
        <div className="container">
            <div className="row p-5">
                <div className="col text-center">
                <h1 className=' text-secondary'>List and Hooks</h1>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-6">
                    <Link to='lifecycle'><h2 className='text-info'>Life cycle of classcomponent</h2></Link>
                </div>
                <div className="col-lg-6 ">
                    <Link to='hooks'><h2 className='text-info'>Hooks of Functional component</h2></Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Module10;