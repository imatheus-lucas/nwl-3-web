import React from "react";
import "../styles/pages/landing.css";
import { FiArrowRight } from "react-icons/fi";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
        <div className="location">
          <strong>Minas Gerais</strong>
          <span>Matozinhos</span>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
