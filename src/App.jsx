import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components/Index';
import { heroapi, popularsales, topratesales, highlight, sneaker, story, footerAPI } from './data/data.js';



function App () {

  return (
    <>
      <Navbar/>
      <Cart/>
      <main className="w-full">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
