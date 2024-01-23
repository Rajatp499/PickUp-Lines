import React from "react";
import "./App.css";

import Home from "./Component/Home/Home";
import NavBar from "./Component/NavBar";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";

//Categories
import Quote from "./Component/Category/Quote"

//test
// import Test from "./Component/Category/test"

//Random
import Random from "./Component/Random/Random";

//Favoutite
import Favourite from "./Component/Favourite/Favourite"
import Store from "./store/Store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/" element={<Home />} />
      <Route path="random" element={<Random />} />
      <Route path="quote" element={<Quote />} />
      <Route path="favourite" element={<Favourite />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </Provider>
  );
}

export default App;
