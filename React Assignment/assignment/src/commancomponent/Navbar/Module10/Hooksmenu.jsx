import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Hooksmenu = () => {
    return (
        <>
            <div className="row">
                <div className='col-lg-6 offset-lg-6' >
                    <ol className='fs-5 '>
                        <Link to="hooksintro"> <li>Introduction of Hooks </li></Link>
                        <Link to="usestate"> <li>UseState</li></Link>
                        <Link to="useeffect"> <li>useEffect </li></Link>
                        <Link to="uselayouteffect"> <li>useLayoutEffect </li></Link>
                        <Link to="usecontest"> <li>usecontest </li></Link>
                        <Link to="usereducer"> <li>usereducer </li></Link>
                        <Link to="usecallback"> <li>usecallback </li></Link>
                        <Link to="usememo"> <li>usememo </li></Link>
                        <Link to="useref"> <li>useref </li></Link>
                        <Link to="useimparetive"> <li>useimparetive </li></Link>
                        <Link to="usedebug"> <li>usedebug </li></Link>
                        <Link to="usedefer"> <li>usedefer </li></Link>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Hooksmenu;