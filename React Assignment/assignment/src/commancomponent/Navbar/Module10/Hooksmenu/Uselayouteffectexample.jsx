import React, { useEffect, useLayoutEffect, useState } from 'react';
const Uselayouteffectexample = () => {
    const [state, setState] = useState("default value")
    const [status, setStatus] = useState(false)
    
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("called useEffect");
    });
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
    });
    return (
        <>
        useLayoutEffectFunctionalCompo
<p>useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.</p>
<p>useLayoutEffect(setup, dependencies?)</p>
<p>Call useLayoutEffect at the top level of your component to declare an Effect:</p>
<p>State : {state}</p>
<p>count : {count}</p>

<button onClick={() => { setState("Something") }} className='btn btn-primary'>Click</button>
&nbsp;
<button onClick={() => { setStatus(!status) }} className='btn btn-primary'>Change Status {JSON.stringify(status)}</button>

<h2>Empty dependency</h2>
<p>An Effect with empty dependencies doesn’t re-run when any of your component’s props or state change.</p>

<blockquote>
  &nbsp;&nbsp;    function ChatRoom(&#123; roomId&#125;) &#123;  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;        useLayoutEffect(() =&gt; &#123;  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            fetch("https://dummyjson.com/products").then((res)=&gt;res.json()).then((result)=&gt;) <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            connection.connect(); <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            return () =&gt; connection.disconnect(); <br />
  &nbsp;&nbsp;&nbsp;&nbsp;        &#125;, []); // ✅ All dependencies declared <br />
  &nbsp;&nbsp;     &#125;
</blockquote>




<h2>Specifying reactive dependencies </h2>
<blockquote>
  &nbsp;&nbsp;    function ChatRoom(&#123; roomId&#125;) &#123;  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;        useLayoutEffect(() =&gt; &#123;  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            fetch("https://dummyjson.com/products").then((res)=&gt;res.json()).then((result)=&gt;) <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            connection.connect(); <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            return () =&gt; connection.disconnect(); <br />
  &nbsp;&nbsp;&nbsp;&nbsp;        &#125;, [state]); // ✅ All dependencies declared <br />
  &nbsp;&nbsp;     &#125;
</blockquote>
<h2>Updating state based on previous state from an Effect </h2>
<p>When you want to update state based on previous state from an Effect, you might run into a problem:</p>

</>
    );
};

export default Uselayouteffectexample;