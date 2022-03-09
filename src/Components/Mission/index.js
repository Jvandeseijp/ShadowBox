import React from "react";
import MissionImg from "../../Assets/MissionImg.png";
import "./index.css";

const Mission = () => {
  return (
    <div className="missionCon">
      <span className="heading">THE MISSION</span>
      <span className="description">
        DEMO TEXT ONLY - UNLIKE MANY "BLOCKCHAIN/CRYPTO" PROJECTS THAT ARE STILL
        MOSTLY CONCEPTUAL IN NATURE, UNDER THE DIRECTION OF NETWORK AFFILIATES
        AND MENTORS, SHADOWBOX MOVED TO TESTING THE BLOCKCHAIN AND ADAPTING
        SOCIO-ECONOMIC METHODOLOGIES TO ITS ORIGINAL MODELING IN PLAY IN LATE
        2016/EARLY 2017, AND EVERY COMPONENT THAT CAME TOGETHER OFFERED A SAFE
        AND SECURE MATCH MADE IN HEAVEN; BEFORE ORGANICALLY TRANSFORMING THE
        ORIGINAL MODELING (I.E PROFIT PARTICIPATION, CLASSES, TERMS, CONDITIONS)
        TO ITS OFFICIAL (AND MUCH MORE ROBUST), CRYPTO (TOKEN-ECONOMIC) BASED
        MODELING, THAT IS CURRENTLY IN PLAY WITH ITS COMMUNITY FUND, TOKEN, AND
        MARKETPLACE. - DEMO TEXT ONLY
      </span>
      <div className="imgCon">
        <img src={MissionImg} />
      </div>
    </div>
  );
};

export default Mission;
