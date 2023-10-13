import React, { useCallback, useState } from 'react';
const funcount = new Set();
const UseCallback = () => {
    const [count, setcount] = useState(0);
    const [dcount, setdcount] = useState(0);
    const [numberdata, setnumber] = useState(0);
    const incrementCounter = useCallback(() => {
        setcount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setdcount(dcount - 1);
    }, [dcount]);
    const incrementNumber = useCallback(() => {
        setnumber(numberdata + 1);
    }, [numberdata]);
    funcount.add(incrementCounter);
    funcount.add(decrementCounter);
    funcount.add(incrementNumber);
    console.log("funcount data", funcount);
    console.log("funccount size", funcount.size);

    return (
        <div>
            <p>count:{count} </p>
            <p>d</p>
            <p>Number:{numberdata} </p>
            <button onClick={incrementCounter}>increment Counter</button>
            <button onClick={decrementCounter}>decrement Counter</button>
            <button onClick={incrementNumber}>increment Number</button>

        </div>
    );
};
    export default UseCallback;