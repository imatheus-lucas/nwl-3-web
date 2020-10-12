import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import mapMaker from "../images/mapMaker.svg";
import "../styles/pages/orphanagesMap.css";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";
const Orphanages: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMaker} alt="happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estãoesperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Minas Gerais</strong>
          <span>Matozinhos</span>
        </footer>
      </aside>
      <Map
        center={[-19.5696861, -44.0617515]}
        zoom={16}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default Orphanages;
