import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import ScrollButton from "./ScrollButton";

function Footer() {
  return (
    <>
      <footer className="pt-2">
        <div className="container">
          {/* <ScrollButton /> */}
          <div className="row mt-5">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <h1>MMSHOP</h1>
              <p>
                lorem ipsum aqua <br /> lorem lorem lorem lorem <br />
                E-commerce .
              </p>
              <div className="d-flex align-items-center justify-content-start text-center mb-3">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-3">
              <h3>Nos Pages</h3>
              <ul className="list-group d-flex flex-column">
                <li className="mb-2">
                  <i className="fas fa-chevron-right"></i>{" "}
                  <a
                    style={{ color: "#797979" }}
                    href="/"
                    className="footer-link"
                  >
                    Accueil
                  </a>
                </li>
                <li className="mb-2">
                  <i className="fas fa-chevron-right"></i>{" "}
                  <a
                    style={{ color: "#797979" }}
                    href="/discover-onlogis"
                    className="footer-link"
                  >
                    Boutique
                  </a>
                </li>
                <li className="mb-2">
                  <i className="fas fa-chevron-right"></i>{" "}
                  <a
                    style={{ color: "#797979" }}
                    href="/technical-support"
                    className="footer-link"
                  >
                    A propos
                  </a>
                </li>
                <li className="mb-2">
                  <i className="fas fa-chevron-right"></i>{" "}
                  <a
                    style={{ color: "#797979" }}
                    href="/pricing"
                    className="footer-link"
                  >
                    Contacts
                  </a>
                </li>
                <li className="mb-2">
                  <i className="fas fa-chevron-right"></i>{" "}
                  <a
                    style={{ color: "#797979" }}
                    href="/pricing"
                    className="footer-link"
                  >
                    Se connecter
                  </a>
                </li>
                <li className="mb-2">
                  <i className="fas fa-chevron-right"></i>{" "}
                  <a
                    style={{ color: "#797979" }}
                    href="/pricing"
                    className="footer-link"
                  >
                    Créer un compte
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto">
              <h3>lorem ipsum auqa</h3>
              <p className="mb-3">Appelez nous lorem ispum ........</p>
              <p className="mb-3">
                <i className="fas fa-home me-1"></i>
                Nouakchott, Medina 3 en face Hotel Chinguitti Palace <br />
                lorrem ipsum aqua
              </p>
              <p>
                <i className="fas fa-envelope me-2"></i>
                Info@medshop.com
              </p>
              <p>
                <i className="fab fa-whatsapp me-2 mb-0" style={{border : 'none'}}></i>+ 222 47590961
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
