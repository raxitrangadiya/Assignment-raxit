import React, { useReducer } from 'react';
const anything=(state,action)=>{
    console.log("state",state,"action",action);
    switch(action.type){
        case "increment":
            console.log("inside increment");
            return{
                age:state.age + 1
            };
        case "decrement":
            console.log("inside decrement");
            return{
                age:state.age - 1
            };
            default:
                break;
           
    }
}
const UseReducerexample = () => {
    const[state,dispatch]=useReducer(anything,{age:23});
    return (
        <>
            <p>useReducer is a React Hook that lets you add a reducer to your component.</p>
            <p>useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component.</p>

            const [state, dispatch] = useReducer(reducer, initialArg, init?)
            <br />
            <br />
            <button onClick={()=>{dispatch({type:"increment"})}}>Increse Age</button>
            <p>my current age = {state.age}.</p>
            <button onClick={()=>{dispatch({type:"decrement"})}}>Decrese Age</button>
        </>
    );
};

export default UseReducerexample;