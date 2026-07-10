import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Company from "./components/About/Company.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Github, {githubLoader} from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* this is the main route, other routes(no matter how many, will be inside this route like a sandwich, and they can be self closing like shown below or they could use opening an closing tag) */}
      {/* Use the self-closing form when the route has no children. */}

      {/* <Route path="" element={<Home />} /> */}
      <Route index element={<Home />} />
      {/* These both routes targets to the same url of the parent so only one of them is to be used and "index" is preffered and standardized approach */}

      <Route path="about/" element={<About />}>
        <Route path="company" element={<Company />} />
      </Route>
      {/* This is a nested route. Since it is inside the parent route "/", its full URL becomes "/about". */}
      {/* Use opening/closing tags when the route contains nested routes: */}
      <Route path="contact" element={<Contact />}/>
      <Route path="user" element={<User />}>
      <Route path=":userid" element= {<User />}/>
      </Route>
      <Route
      loader={githubLoader} 
      path="github"
      element={<Github />}></Route>
      <Route path="*" element={<div>Not Found!</div>}></Route>
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
