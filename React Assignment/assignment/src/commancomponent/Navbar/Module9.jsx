import React from 'react';
import ListView from './Listview/list.jsx'
import Counter from './counter/StateMethod.jsx'
const Module9 = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <h1 className='text-danger text-center my-5 '>Module-9</h1>
                </div>
                <div className="row">
                    <ul className='list-item'>
                        <li>What is Raect ?</li>
                        <p>&#8669;The React framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                        <li>What is NPM in React Js?</li>
                        <p>&#8669;npm is an abbreviation used for the node package manager. It is a package manager for JavaScript. It is the default package manager that comes with NodeJS when you install it.</p>
                        <li>What is Role of Node Js in react Js?</li>
                        <p>&#8669;Node. js is easily employed as a server-side proxy, where it can handle a large amount of simultaneous connections in a nonblocking manner. It's useful for proxying different services with varying response times, or collecting data from multiple source points.</p>
                        <li>What is CLI command In React Js?</li>
                        <p>&#8669;Command-line interfaces (CLIs) built-in Node. js authorize automating repetitive tasks while leveraging the Node. js ecosystem. Package managers like npm and yarn are distributed and ingested across multiple platforms.</p>
                        <li>What is Components in React Js?</li>
                        <p>&#8669;Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
                        <li>What is Header and Content Components in React Js?</li>
                        <p>&#8669;Headers are compositions that extend standard navbar functionalities. They contain additional components like a jumbotron, sub-navbar, or image covers which serve as a containers for extra navigation elements - usually links, forms, or call-to-action buttons.</p>
                        <li>
                            <li>
                                installation of React in different system
                                <ul>
                                    <li className='under-list'>How to install React Js on Windows</li>
                                    <p>Step 1: Install Node.js installer for windows. Click on this link. Here install the LTS version (the one present on the left). Once downloaded open NodeJS without disturbing other settings, click on the Next button until it’s completely installed.</p>
                                    <p>Step 2: Open command prompt  to check whether it is completely installed or not type the command - </p>
                                    <p>Step 3: Now in the terminal run the below command: npm install -g create-react-app  </p>
                                    <p>Step 4:Now Create a new folder where you want to make your react app using the below command:

                                        mkdir newfolder</p>
                                    <p>Step 5: Now inside this folder run the command npx create-react-app reactfirst YOUR_APP_NAME</p>
                                    <p>Step 6: Now open the IDE of your choice for eg.  Visual studio code and open the folder where you have installed the react app newfolder (in the above example)  inside the folder you will see your app’s name reactapp (In our example). Use the terminal and move inside your app name folder.Use command  cd reactapp (your app name)</p>
                                    <p>Step 7: To start your app run the below command npm start </p>
                                    <p>&#8669;Check NPM version on windows:Writer the given command and press Enter: npm –version.
                                        The command will display the version number of NPM installed on your system.</p>
                                    <li className='under-list'>How to install React Js on Linux ?</li>
                                    <p>Step 1: Install npm. Login to your server as a sudo user and run the following command: sudo apt install npm. ...</p>
                                    <p>Step 2: Install create-react-app Utility. create-react-app is a utility that allows you to set up all the tools required for a React application. ...</p>
                                    <p>Step 3: Create and Launch Your First React Application.</p>
                                    <p>&#8669;Type the command npm -v or npm –version in your command prompt to see the given output.</p>

                                </ul>

                            </li>

                        </li>
                        <li> How to change in components of React Js?</li>
                        <p>&#8669;React components automatically re-render whenever there is a change in their state or props. A simple update of the state, from anywhere in the code, causes all the User Interface (UI) elements to be re-rendered automatically. However, there may be cases where the render() method depends on some other data.</p>
                        <li>How to Create a List View in React Js?</li>
                        <p>&#8669;
                            To create a list view in React.js, utilize the map() function to loop through an array of data, rendering list elements with JSX. Begin by defining your data array. Then, within a functional component, employ the map() function to iterate over the array, assigning a unique key to each list element for efficient updates. Display the list within a container, applying appropriate CSS for styling. Import and include this component in your main application file. Upon running the app, the list items will render dynamically, forming a basic list view in React.js.</p>
                            <><ListView/></>
                          <li>Create incriment decriment state by button click </li>  
                          <p><><Counter/></></p>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Module9;