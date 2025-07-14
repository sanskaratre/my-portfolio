import React, { useState } from "react";
import Home from "../../pages/Home/home";
import { MdKeyboardDoubleArrowRight , MdKeyboardDoubleArrowLeft} from "react-icons/md";
import "./layout.css"
import Menu from "../Menu/menu";

const Layout = () => {

  const [toggle, setToggle] = useState(true) ;

  const toggleHandler = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={toggleHandler}>
            {!toggle?  <MdKeyboardDoubleArrowRight size={30} /> : <MdKeyboardDoubleArrowLeft size={30} /> }
           
            </p>
          </div>
            <Menu toggle={toggle} />
        </div>

        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;