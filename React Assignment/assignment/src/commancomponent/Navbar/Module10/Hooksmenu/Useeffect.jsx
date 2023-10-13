import React, { useEffect, useState } from 'react';
    const Useeffect = () => {
        const [state, setState] = useState("default value")
        const [status, setStatus] = useState(true)
        // counter
        const [count, setCount] = useState(0);
        console.log("called use effect");
    
        useEffect(() => {
            console.log("called use effect api");
            fetch("https://dummyjson.com/products").then((res) => res.json()).then((result) => {
                console.log(result);
            })
            const intervalId = setInterval(() => {
                setCount(c => c + 1);//pass a state updater 
            }, 1000)
            return () => {
                console.log("called returned");
                clearInterval(intervalId)
            }
        }, [state])
    
    
    
        return (
            <>
                <div>
                    <h1>counter : {count}</h1>
                    <p><strong> state:</strong>   {state}</p>
                    <button onClick={() => { setState("somthing on set state") }} className='btn btn-primary'>set state</button>&nbsp;&nbsp;
                    <button onClick={() => { setStatus(!status) }} className='btn btn-danger'>change state   {JSON.stringify(status)}</button>
                </div>
                <div className='text-danger'>
                    <h1>{}</h1>
                </div>
            </>
        );
    };

export default Useeffect;