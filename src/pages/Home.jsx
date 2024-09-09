import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import HeroSection from "../components/home/HeroSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
            <section id="landing">
                      <Navbar />
                      <HeroSection />
            </section>
            <AboutSection />
    </>
  )
}

export default Home