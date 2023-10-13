import React, { useState } from 'react';
let clickHandlerOutside=()=>{
    alert("outside button click")
}
const Usestateexample = () => {
    const[uName,setother] = useState("anything data");
    const[state,setState] = useState("anything data");
    let username ="somthing"
    let clickHandlerInside=()=>{
        alert("inside button click")
    }
    let btnClickVariableUpdate=()=>{
        console.log("update variable");
        setother("username update")
        setState("state user name ")
    }
    return (
        <>
         <div className="row">
            <div className="col-lg-12 ">
                <h2>State Exmaple in Funtional Component</h2>
                <p className='text-danger'>username: {username}</p>
                <p className='text-danger'>state username: {uName}</p>
                <p className='text-danger'>State: {state}</p>
                <button className='btn btn-primary' onClick={clickHandlerInside}>inside click</button>&nbsp;&nbsp;
                <button className='btn btn-secondary' onClick={clickHandlerOutside}>Button outside </button>&nbsp;&nbsp;
                <button className='btn btn-danger' onClick={btnClickVariableUpdate}>On click Updatde</button>&nbsp;&nbsp;
            </div>
            </div>   
        </>

    );
};
export default Usestateexample;