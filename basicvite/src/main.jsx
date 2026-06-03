// import { createRoot } from "react-dom/client";
// import React from "react";
import ReactDOM from 'react-dom/client'
// import MyApp from "./MyApp.jsx";
import App from "./App.jsx";
// import Youtube from './youtube.jsx'

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank'
//     },
//     children: "Click me to visit google"
// }
/*
 {
  $$typeof: Symbol(react.element),
  type: 'a',
  props: {...}
} */
//const username = "\n Yash Rawat"

// const AnElement = (
//   <a href="http://google.com" target='_blank'>
//     Visit Google
//   </a>
// );  // this "AnElement" gets converted into "aReactElement"

// const aReactElement = React.createElement(
//   'a',{
//     href: "https://google.com", target: '_blank'
//   },
//   'Click to visit google'
// )

// createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//     <MyApp />
//     <Youtube />
//     {9*3 }  {/*these types of things get evaluated that's why rendered properly*/} 
//     <h2>{username}</h2>
//   </>
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <>

    <App />
    {/* <MyApp />
    <App />
    <h1 style={{color: "green", backgroundColor: "grey"}}>{AnElement}</h1>
    {aReactElement} */}
  </>,
      // AnElement      
      //this will get render because at last is displayed
);

