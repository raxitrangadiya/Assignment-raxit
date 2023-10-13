import { useSyncExternalStore, useDebugValue } from 'react';



function useOnlineStatus() {
    const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine, () => true);
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return isOnline;
}

function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}


const UseDebugValueexample = () => {
    const isOnline = useOnlineStatus();
    return (
        <>
                    <p>useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.</p>
        <h4>Parameters </h4>
        <ul class="ms-6 my-3 list-disc">
            <li class="leading-relaxed mb-1"><code dir="ltr" class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px">value</code>: The value you want to display in React DevTools. It can have any type.</li>
            <li class="leading-relaxed mb-1"><strong class="font-bold">optional</strong> <code dir="ltr" class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px">format</code>: A formatting function. When the component is inspected, React DevTools will call the formatting function with the <code dir="ltr" class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px">value</code> as the argument, and then display the returned formatted value (which may have any type). If you don’t specify the formatting function, the original <code dir="ltr" class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px">value</code> itself will be displayed.</li>
        </ul>
        <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>

        </>
    );
};

export default UseDebugValueexample;