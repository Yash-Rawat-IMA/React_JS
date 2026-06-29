import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Company from "./components/About/Company.jsx";
import Home from "./components/Home/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

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
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
