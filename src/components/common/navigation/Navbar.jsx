import { useState } from "react"
import { sidebarContext } from "./navcontext";
import Header from "./Header";

const Navbar = () => {
    const [ sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <sidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
             <Header />
    </sidebarContext.Provider>
  )
}

export default Navbar