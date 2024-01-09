import React from "react";
import "./srilanka.css";
import sl_map from './svg/lk.svg'

const SriLankaMap = () => {
  return (
    <div className="map-container">
      <img alt={"Sri Lankan Map"} src={sl_map} style={{width:"35%"}}/>
    </div>
  );
};

export default SriLankaMap;
