import React from "react";
import "./srilanka.css";
import sl_map from './svg/lk.svg'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const SriLankaMap = () => {
  return (
    <div className="map-container">
      <img alt={"Sri Lankan Map"} src={sl_map} style={{width:"25%"}}/>
    </div>
  );
};

export default SriLankaMap;
