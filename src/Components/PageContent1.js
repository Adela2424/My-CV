import React from "react";
import "./PageContent1.css";
function PageContent1() {
  return (
    <>
      <div className="container_page1">
        <div className="container_hero">
          <div className="hero">
            <div className="hero_left">
              <div className="text_left">
                <h1 className="text_hello"> Hello</h1> <br />
                <h3 className="description">
                  Sunt Ionce Adela Maria am 23 de ani si cunosc la nivel
                  incepator partea de front-end developer.
                </h3>{" "}
                <br />
                <p className="knowledge ">
                  {" "}
                  Wordpress, Html, Css, JS, React.js, Adobe XD, Bootstrap.
                </p>
              </div>
              <button className="button_contact_me">
              
              <a href="data/CV-IONCE-ADELA-MARIA.pdf" download="CV-IONCE-ADELA-MARIA"> Descarcă CV </a>  
              </button>
              <br />
              <div className="icons">
                <a href="https://github.com/Adela2424">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://ro-ro.facebook.com/adela.ionce">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="https://ro.linkedin.com/in/adela-ionce-32a993216">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                 <a href="#telefon"><i className="fas fa-phone-alt fa-lg"></i> </a> 
              </div>
            </div>
            <div className="hero_right">
              <img className="png7" src="images/png7.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container_page2">
        <h1 id="despre-mine"> Despre Mine</h1>
        <div className="hero_page2">
          <div className="hero_page2_left">
            <div className="info_left">
              <div className="info_education">
                <h3> Detalii personale. </h3> 
              </div>
              <div className="container_personal">
                <div className="personal_details">
                  <h4> Zi de naștere</h4>
                  <h4> Telefon </h4>
                  <h4>Email</h4>
                  <h4>Localitate</h4>
                </div>
                <div className="date_personale">
                  <p className=" birthday"> 24.03.1998</p>
                  <p id="telefon" className="phone">0744846499</p>
                  <p className="email">ionce.adela@yahoo.com</p>
                  <p className="location">Ciocotiș / Maramureș</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_page2_right">
            <div className="info">
              <div className="info_education">
                <i className="fas fa-user-graduate fa-2x"></i>
                <h3> Educatie și formare: </h3> <br />
              </div>
              <div className="edit_text">
                <p>
                  {" "}
                  Universitatea Tehnică din Cluj Napoca centrul universitar Nord
                  din Baia Mare
                </p>
                <p> Specializarea-Management IFR</p>
                <p>Licențiat</p>
              </div>
            </div>
            <div className="info">
              <div className="info_education">
                <i className="fas fa-briefcase fa-2x"></i>
                <h3> Experiență profesională: </h3>
              </div>
              <div className="edit_text">
                <p>
                  {" "}
                  Angajată ca muncitor producție la Cablex Baia Mare timp de 2
                  ani și 3 luni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container_page3">
          <div className="hero_page3">
              <div className="hero_page3_left">
                 <div className="items">
                     <h3>Cunoștințele mele.</h3>
                     <span className="gri"> CSS </span> <span> SASS</span> <span className="gri">  React.js </span> <span> Adobe XD</span> 
                      <span className="gri" > HTML </span> <span> Wordpress </span>  <span className="gri">JS</span> <span>  Photoshop </span> < span className="gri"> Bootstrap </span>
                 </div>
              </div>
              
              
              <div className="hero_page3_right">
                   <div className="container_proiects">
                       <div className="items_proiects">
                        <h3 id="proiectele-mele" className="proiectele_mele">Proiecte.</h3>  
                        <div className="proiects">
                         <a href=" https://happy-thompson-5be3a7.netlify.app/"> <img src="images/amanet-app.png" alt="" /></a> 
                          <a href=" https://travell-romania.netlify.app/">   <img src="images/travel.png" alt="" />  </a>
                          <a href=" https://facebook-app1.netlify.app/"> <img src="images/facebook-clone.png" alt="" /> </a> 
                           <a href=" https://www.adelamaria.com/"> <img src="images/wordpress.png" alt="" /> </a>
                        </div>
                       </div>
                       
                   </div>
              </div>

              </div>
      </div>

      <div className="container_footer">
          <p> © 2021 Ionce Adela Maria.All right reserved.</p>
      </div>
    </>
  );
}

export default PageContent1;
