// src/screens/ROBERT/index.jsx
import React from "react";
import "./style.css";

export const Robert = () => {
  return (
    <div className="ROBERT">
      <div className="div">
        <img
          className="screenshot-from"
          alt="Screenshot from"
          src={"./docs/assets/robert.png"}
        />

        <div className="overlap-group">
          <div className="text-wrapper">R.O.B.E.R.T Robot Project</div>

          <p className="ROBERT-is-best">
            <span className="span">
              ROBERT is best described by the description on Github which is as
              follows:
              <br />
            </span>

            <span className="text-wrapper-2">
              “R.O.B.E.R.T is a robotics project designed to showcase the
              integration of <br />
              Raspberry Pi with LEGO components and AI-powered image recognition
              &amp; <br />
              speech, all through a controlled web dashboard. This system
              explores the <br />
              synergy between hardware and software in an engaging and
              educational way.”
              <br />
            </span>

            <span className="span">
              <br />I worked on the ROBERT project for the months leading up to
              Christmas 2024. My main responsibilities was refining the HP system, designing robot
              chassis and developing the image
              recognition critical to making the system work. It was a very
              engaging project which taught
              me<br /> 
              a great deal in regards to web servers and remote control of
              Raspberry Pis among other
              things. In the end the wifi we used to run the project turned out
              to be far too weak for all
              robots, which meant that our reveal did not go as planned,
              however, i am still proud of our work.
            </span>
          </p>
        </div>

        <img className="shared-image" alt="Shared image" src={"./docs/assets/robert1.png"} />

        <img className="img" alt="Shared image" src={"./docs/assets/robert2.png"} />
      </div>
    </div>
  );
};
