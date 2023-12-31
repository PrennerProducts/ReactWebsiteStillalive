import React from "react";
import "../../App.css";
import MyCard from "../MyCard";
import "./Downloads.css";
import AsciiBus from "../AsciiBus";

// import Contact from './Contact';
// import Gallerie from './Gallerie';
// import UeberMich from './UeberMich';

function Downlaods() {
  return (
    <div className="downloadcontainer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="titel2">Downloads ...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a href="/documents/bewerbung.pdf" target="_blank">
              <MyCard
                imageSrc="/images/logo-application.png"
                title="Open Application"
                description=""
                listItems={[]}
              />
            </a>
          </div>
          <div className="col-sm-6">
            <a href="/documents/lebenslauf.pdf" target="_blank">
              <MyCard
                imageSrc="/images/logo-color.png"
                title="Open CV"
                description=""
                listItems={[]}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="downloads"></div>
      <div className="bus">
        <AsciiBus />
      </div>
      <div className="row mt-5" style={{ width: "100%", margin: "auto" }}>
        <div className="col">
          <p className="goalsfooter">
            I am excited about the possibilities that lie ahead and grateful for
            the opportunity to pursue my passion in the gaming industry. I am
            eager to contribute to the success of your esteemed gaming studio
            and gain invaluable experience during this internship. Thank you for
            considering my application, and I look forward to the possibility of
            working together on exciting gaming projects.
          </p>
        </div>
      </div>
      {/* <div className="goalscontainer down">
        <p className="goalsfooter">
          I am excited about the possibilities that lie ahead and grateful for
          the opportunity to pursue my passion in the gaming industry. I am
          eager to contribute to the success of your esteemed gaming studio and
          gain invaluable experience during this internship. Thank you for
          considering my application, and I look forward to the possibility of
          working together on exciting gaming projects.
        </p>
      </div> */}
    </div>
  );
}

export default Downlaods;
