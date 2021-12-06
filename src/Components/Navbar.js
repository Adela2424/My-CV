import React, { useState } from "react";
import "./Navbar.css";


function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="container_page">
      <div className="continut_all">
        <div className="container_principal_nav">
          <nav className="container_nav">
            <div className="left">
              
            </div>
            <div className="centru_menu" id={showLinks ? "hidden" : ""}>
              <li>
                <a href="/"> ACASĂ </a>
              </li>
              <li>
                <a className="despre_mine" href="#despre-mine"> DESPRE MINE</a>
              </li>
              
              <li>
                <a href="#proiectele-mele"> PROIECTE </a>
              </li>
            </div>
            <div
              onClick={() => setShowLinks(!showLinks)}
              className="button_nav"
            >
              <i className="fas fa-bars btn_mobile fa-lg"></i>
            </div>
          </nav>
        </div>
        <hr className="hr_nav" />
      </div>
    </div>
  );
}

export default Navbar;