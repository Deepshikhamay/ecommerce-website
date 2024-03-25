import React, { useEffect, useState } from "react";
import Menubar from "./menu"

const Navbar = () => {
  const [show, setShow]  = useState("translate-y-0")
  const [lastScrollY, setLastScrollY]  = useState(0)

  const controlMenubar  = () => {
    if ( window.scrollY > 200) {
      if(window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]")
      } else  {
        setShow("shadow-sm")
      }
    } else {
      setShow("translate-y-0")
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlMenubar);
    return (
      window.removeEventListener("scroll", controlMenubar)
    )
  }, [lastScrollY])

  return (
    <div>
      <Menubar />
    </div>
  );
};

export default Navbar;
