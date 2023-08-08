import Hero from "../components/Hero";
import AppBody from "../components/AppBody";
import { heroapi } from "../data/data";
import WelcomeSect from "../components/WelcomeSect";




const HomePage = () => {
  return (
    <>
        <Hero heroapi={heroapi} />
        <AppBody/>
        <WelcomeSect/>
    </>
  )
}

export default HomePage