import React, { useRef } from 'react';
import MyInput from './11ImparativeChild.jsx';

const UseimperativeHandleexample = () => {
    console.log("Parent Compo Called");
    const ref = useRef(null);

    function handleClick() {
        console.log("called handleClick Parent Compo",ref.current);
        ref.current.focus()};
    return (
        <>
             <p>useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.</p>
            <form>
                <MyInput label="Enter your name:" ref={ref} />
                <button type="button" onClick={handleClick}>
                    Edit
                </button>
            </form>
        </>
    );
};

export default UseimperativeHandleexample;
