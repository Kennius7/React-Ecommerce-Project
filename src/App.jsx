/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories, AppBody } from './components/Index';
import { heroapi, popularsales, topratesales, highlight, sneaker, story, footerAPI } from './data/data.js';
import { NavContext } from "../src/components/context/NavContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";



function App () {

  const navLinks = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "/aboutus",
        title: "About Us",
    },
    {
        id: "/products",
        title: "Our Products",
    },
    {
        id: "/blog",
        title: "Blogs",
    },
    {
        id: "/createarticle",
        title: "Blog Admin",
    },
    {
        id: "/contactus",
        title: "Contact Us",
    },
    {
        id: "/signin",
        title: "Sign In",
    },
  ];

  const [active, setActive] = useState("Home");

  return (
    // eslint-disable-next-line no-undef
    <NavContext.Provider value={{navLinks, setActive}}>
      <BrowserRouter>
        <Navbar/>
        <Cart/>
        <main className="w-full">
          
            <Routes>
              <Route path="/" element={<HomePage/>} exact />
            </Routes>
            {/* <Sales endpoint={popularsales} ifExists />
            <FlexContent endpoint={highlight} ifExists />
            <Sales endpoint={topratesales} />
            <FlexContent endpoint={sneaker} />
            <Stories story={story} /> */}
          
        </main>
        <Footer footerAPI={footerAPI} />
      </BrowserRouter>
    </NavContext.Provider>
  )
}

export default App
