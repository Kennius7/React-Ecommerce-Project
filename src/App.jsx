/* eslint-disable no-unused-vars */
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories, AppBody } from './components/Index';
import { heroapi, popularsales, topratesales, highlight, sneaker, story, footerAPI } from './data/data.js';
import { NavContext } from "../src/components/context/NavContext";



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
        id: "/team",
        title: "Our Team",
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

  return (
    // eslint-disable-next-line no-undef
    <NavContext.Provider value={{navLinks, setActive}}>
      <Navbar/>
      <Cart/>
      <main className="w-full">
        <Hero heroapi={heroapi} />
        <AppBody/>
        {/* <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} /> */}
      </main>
      <Footer footerAPI={footerAPI} />
    </NavContext.Provider>
  )
}

export default App
