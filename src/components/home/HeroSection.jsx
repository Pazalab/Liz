import gsap from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
import hero1 from "../../assets/hero1.jpg"
const HeroSection = () => {
   const heroRef = useRef();
  
   useEffect(() => {
          const heroWrapper = heroRef.current;
           let ctx = gsap.context(() => {
                     let tl = gsap.timeline({
                             scrollTrigger: {
                                    trigger: heroWrapper,
                                    start: "center center",
                                    end: () => "+="+heroWrapper.offsetWidth,
                                    scrub: true,
                                    pin: true,
                                    anticipatePin: 1.4
                           },
                     })
                     tl.fromTo(heroWrapper.querySelector(".after"), {
                        xPercent: -100,
                        x: 0,
                     }, { xPercent: 0})
                     .fromTo(heroWrapper.querySelector(".after img"), {
                             xPercent: 100,
                             x: 0
                     }, { xPercent: 0}, 0)
         })
           return () => ctx && ctx.revert();
   }, [])
  return (
    <div ref={heroRef} className="hero-section">
              <div className="section-slider before">
                        <div className="section-slider-content">
                                     <h1>I&apos;m Liz</h1>
                                     <div className="bottom-slider-texts">
                                               <h2>Elevating brand identities through creative, data driven strategies that engage, convert and take brands to the next level.</h2>
                                     </div>
                        </div>
              </div>
              <div className="section-slider after">
                          <img src={hero1} alt="" />
              </div>
    </div>
  )
}

export default HeroSection