import { forwardRef, useRef, useImperativeHandle } from 'react';
const MyInput = forwardRef(function MyInput(props, ref) {
    console.log("child compo");
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
        console.log("useImperativeHandle");
        return {
            focus() {
                console.log("focus",inputRef.current.value);
                inputRef.current.focus();
            },
            scrollIntoView() {
                console.log("scrollIntoView");
                inputRef.current.scrollIntoView();
            },
        };
    }, []);

    return <input {...props} ref={inputRef} />;
});

export default MyInput;
