import React from "react";
import video1 from "../assets/videod/insta_m.mp4";

const getBrowserWidth = function() {
  if (window.innerWidth > 991) {
    // Small Device
    return "desktop";
  }
};

const device = getBrowserWidth();

export default props => {
  if (device === "desktop") {
    return (
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>

        <div className="overlay-desc">
          <h1>JoonasNilp</h1>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};
