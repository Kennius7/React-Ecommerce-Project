import { Hero } from "./components";
import { heroapi } from './data/data.js';



function App () {

  return (
    <>
      <main className="w-full">
        <Hero heroapi={heroapi} />
      </main>
    </>
  )
}

export default App
