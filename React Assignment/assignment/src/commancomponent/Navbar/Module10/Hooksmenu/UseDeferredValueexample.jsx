import { useState, useDeferredValue } from 'react';
import SlowList from './15SlowList.jsx';

export default function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
      <p>useDeferredValue is a React Hook that lets you defer updating a part of the UI.</p>
      <h2>Parameters </h2>
      <p>value: The value you want to defer. It can have any type.</p>
      <h2>Returns </h2>
      <p>During the initial render, the returned deferred value will be the same as the value you provided. During updates, React will first attempt a re-render with the old value (so it will return the old value), and then try another re-render in background with the new value (so it will return the updated value).</p>
    </>
  );
}
