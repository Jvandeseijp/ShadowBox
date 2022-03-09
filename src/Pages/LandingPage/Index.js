import React from "react";
import "./Index.css";
import Header from "../../Components/Header/Index";
import HeroSec from "../../Components/HeroSec/Index";
import AudienceSec from "../../Components/AudienceSec/Index";
import Information from "../../Components/Information/Index";
import Solution from '../../Components/Solution/index'
import Mission from '../../Components/Mission/index'

function LandingPage() {
  return (
    <div className="landingpagecon">
      <Header />
      <HeroSec />
      <AudienceSec />
      <div className="landingsec4">
        <Solution />
        <Mission />
      </div>
      <Information />
      <div className="footer"></div>
    </div>
  );
}
export default LandingPage;
