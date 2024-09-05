import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { BsPhoneVibrate } from "react-icons/bs";
const Header = () => {
  return (
    <header>
               <div className="inner-row">
                         <div className="header-content">
                                    <Link to={"/"} className="logo">
                                               <img src={logo} alt="" />
                                     </Link>
                                     <nav>
                                              <ul>
                                                        <li><NavLink to={"/"}>Home <span></span></NavLink></li>
                                                        <li><NavLink to={"/about"}>About<span></span></NavLink></li>
                                                        <li><NavLink to={"/works"}>Works<span></span></NavLink></li>
                                                        <li><NavLink to={"/insights"}>Insights<span></span></NavLink></li>
                                                        <li><NavLink to={"/podcast"}>Podcast<span></span></NavLink></li>
                                              </ul>
                                              <div className="header-action">
                                                      <Link to={"/"}> <span><BsPhoneVibrate /></span> Contact Me</Link>
                                              </div>
                                     </nav>
                         </div>
               </div>
    </header>
  )
}

export default Header