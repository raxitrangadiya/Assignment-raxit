import React, { createContext, useContext, useState } from 'react';

// import { Form } from 'react-router-dom';
const ThemeContext = createContext(null);
const UseContextExample = () => {
    const [theme, setTheme] = useState('dark');
    // const [size, setSize] = useState('M');
    return (
        <>
            <p>UseContext is a React Hook that lets and subscribe to conttext from your component.</p>
            <ThemeContext.Provider value={theme}>
                <Form />
            </ThemeContext.Provider>
            <button onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); }}>Toggle theme</button>

        </>
    );
};
const Form = () => {
    return (
        <>
            <h3>FormData</h3>
            <Panel title="WELCOME">
                <button>Log in</button>
                <button>Log out</button>
            </Panel>
        </>
    );
};
function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = "panel-" + theme;
    return (
        <section className={className}>
            <h3>Panel</h3>
            <p>{theme}</p>
            {children}
        </section>
    )

}
function Button({ onClick, children }) {
    const theme = useContext(ThemeContext);
    const className = "button-" + theme;
    return <>
        <button className={className} onClick={onClick}>{children}</button>;

    </>

}

export default UseContextExample;