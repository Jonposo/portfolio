import React from "react";
import screenshotFrom20250527102747 from "./screenshot-from-2025-05-27-10-27-47.png";
import sharedImage1 from "./shared-image-1.png";
import sharedImage21 from "./shared-image-2-1.png";
import "./style.css";

export const VibbOnline = () => {
  return (
    <div className="vibb-online">
      <div className="div">
        <img
          className="screenshot-from"
          alt="Screenshot from"
          src={screenshotFrom20250527102747}
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
              Christmas 2024. My main <br />
              responsibilities was refining the HP system, designing robot
              chassis and developing the image
              <br />
              recognition critical to making the system work. It was a very
              engaging project which taught <br />
              me a great deal in regards to web servers and remote control of
              Raspberry Pis among other <br />
              things. In the end the wifi we used to run the project turned out
              to be far too weak for all <br />
              robots, which meant that our reveal did not go as planned,
              however, i am still proud of our work.
            </span>
          </p>
        </div>

        <img className="shared-image" alt="Shared image" src={sharedImage1} />

        <img className="img" alt="Shared image" src={sharedImage21} />
      </div>
    </div>
  );
};
