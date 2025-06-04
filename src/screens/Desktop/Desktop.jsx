// src/screens/Desktop/Desktop.jsx
import React, { useState } from "react";

// Korrekt relativ väg: Desktop.jsx ligger i src/screens/Desktop/,
// och Robert‐komponenten finns i src/screens/ROBERT/index.jsx
import { Robert } from "../ROBERT/index.jsx";
import { LightFrame } from "../LightFrame/index.jsx";
import "./style.css";

export const Desktop = () => {
  // 1) local state: styr om Robert ska visas
  const [showRobert, setShowRobert] = useState(false);

  // För LightFrame‐skärmen:
  const [showLightFrame, setShowLightFrame] = useState(false);

  // 2) Om showRobert är true → rendera Robert + tillbaka‐knapp
  if (showRobert) {
    return (
      <div style={{ 
        padding: "4rem",
        backgroundImage: "linear-gradient(to bottom, rgba(240, 255, 40, 1) 0%, rgba(240, 255, 40, 1) 100%), linear-gradient(to bottom, rgb(254, 119, 67) 0%, rgb(254, 119, 67) 100%)",
        backgroundClip: "content-box, padding-box"
      }}>
        <button onClick={() => setShowRobert(false)} className="tillbaka-button">
          Tillbaka
        </button>
        <Robert />
      </div>
    );
  }

  else if (showLightFrame) {
    return (
      <div style={{ 
        padding: "4rem",
        backgroundImage: "linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(to bottom, rgb(39, 63, 79) 0%, rgb(39, 63, 79) 100%)",
        backgroundClip: "content-box, padding-box"
      }}>
        <button onClick={() => setShowLightFrame(false)} className="tillbaka-button">
          Tillbaka
        </button>
        <LightFrame />
      </div>
    );
  }

  // 3) Om showRobert är false → visa ordinarie Desktop‐layout
  else return (
    <div className="desktop" data-model-id="1:2">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">Maximilian Bote Fabriani Pieksma</div>

          <p className="paketeringsansvarig">
            Executive Chief of Serving <br />
            Max Hamburgers Boden
          </p>

          <p className="p">“Packing the worst burgers you've seen”</p>

          <p className="about-experiance">
            ---- About
            <br />
            ---- Experience
            <br />
            ---- Projects
            <br />
            ---- Contact
          </p>

          <div className="overlap">
            <div className="rectangle" />

            <div className="text-wrapper-2">SOCIALS</div>
          </div>

          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                <a
                  href="https://discord.com/"
                  className="span"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.com/Jonposo/portfolio/blob/master/docs/assets/discord.png?raw=true"
                    width="25"
                    height="25"
                    className="icon"
                  />
                  maxi2007
                </a>
                <br />
              </span>
            </p>

            <p className="text">
              <span className="span">
                <a
                  href="https://www.instagram.com/maximiliankomposto/"
                  className="span"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.com/Jonposo/portfolio/blob/master/docs/assets/instagram.png?raw=true"
                    width="25"
                    height="25"
                    className="icon"
                  />
                  maximiliankomposto
                </a>
                <br />
              </span>
            </p>

            <p className="text">
              <span className="span">
                <a
                  href="https://github.com/Jonposo"
                  className="span"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.com/Jonposo/portfolio/blob/master/docs/assets/github.png?raw=true"
                    width="25"
                    height="25"
                    className="icon"
                  />
                  Jonposo
                </a>
                <br />
              </span>
            </p>

            <p className="text">
              <span className="span">
                <a
                  href="https://www.linkedin.com/in/maximilian-fabriani-pieksma-40498932a/"
                  className="span"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.com/Jonposo/portfolio/blob/master/docs/assets/linkedin.png?raw=true"
                    width="25"
                    height="25"
                    className="icon"
                  />
                  Maximilian Fabriani Pieksma
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="i-am-a-dedicated-and-wrapper">
          <p className="i-am-a-dedicated-and">
            I am a dedicated and hardworking student, with an innovative mind
            and a commitment to success. My favourite part of a project is
            seeing all separate parts come togheter in a beautiful finished
            product.
            <br />
            <br />I study programming at the technical program of
            Björknäsgymnasiet. I have been interested in programming for most of
            my life. When i was little i spent a lot of time programming games
            in scratch och simple programs in python. <br />
            <br />
            Now that I am older, I have spent most of my time developing my skills 
            in web development. During this school year, I have created a simple 
            dating site, a control interface for robots using Raspberry Pi, 
            and finally this personal website.
            <br />
            <br />
            In my free time, I spend a lot of time with friends, playing video games, 
            board games, or role-playing games. I am also active in the Home Guard 
            Youth. In addition, I work out at the gym several times a week.
          </p>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-3">
            <a
              href="/portfolio/assets/CVMaximilianFabrianiPieksma.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full résumé
            </a>
          </div>
        </div>

        <div className="overlap-2">
          {/* Vibb.online */}
          <div 
            className="project-card1"
            onClick={() => window.open("https://vibb.online/userauth/login.php", "_blank")}
            style={{ cursor: "pointer" }}
            >
            <img
              className="screenshot-from"
              alt="Screenshot from"
              src="https://github.com/Jonposo/portfolio/blob/master/docs/assets/VIBB.png?raw=true"
            />
            <p className="vibb-online-vibb-is">
              <span className="text-wrapper-4">Vibb.online</span>
              <br />
              <span className="text-wrapper-5">
                Vibb is a new contender in the field of online dating. <br />
                Using a simple, but accurate, algorithm to predict <br />
                matches and ensure you are happy with your match.
              </span>
            </p>
          </div>

          {/* ROBERT – klickar vi ⇒ setShowRobert(true) */}
          <div
            className="project-card2"
            onClick={e => {
              e.stopPropagation();
              setShowRobert(true);
            }}
            style={{ cursor: "pointer" }}
          >
            <img
              className="screenshot-from"
              alt="Screenshot from"
              src="https://github.com/Jonposo/portfolio/blob/master/docs/assets/robert.png?raw=true"
            />
            <p className="r-o-b-e-r-t-robot">
              <span className="text-wrapper-4">R.O.B.E.R.T Robot project</span>
              <br />
              <span className="text-wrapper-5">
                ROBERT is a revolutionary development in remote control
                robots. Utilizing the advanced ROBERT platform we have
                managed to create all manner of games and tools, all compatible
                with the ROBERT chassis.
              </span>
            </p>
          </div>

          {/* LightFrame */}
          <div
            className="project-card3"
            onClick={e => {
              e.stopPropagation();
              setShowLightFrame(true);
            }}
            style={{ cursor: "pointer" }}
          > 
            <img
              className="img"
              alt="Screenshot from"
              src="https://github.com/Jonposo/portfolio/blob/master/docs/assets/LIGHTFRAME.png?raw=true"
            />
            <p className="lightframe">
              <span className="text-wrapper-4">LightFrame</span>
              <br />
              <span className="text-wrapper-5">
                LightFrame is a advanced tool designed to make cycling
                at night much safer and accessible. Using a state of the art
                combined laser-lamp array to project a zone of light <br />
                around the bike, thus marking the bikes area and making <br />
                it much more visible at night.
              </span>
            </p>
          </div>
        </div>

        <div className="overlap-6">
          <div className="text-wrapper-6">3D OBJECT</div>
        </div>

        <div className="overlap-7">
          <div className="text-wrapper-7">Contact:</div>

          <p className="phone-number">
            Phone number: 0702646913
            <br />
            Email: maximilianfp@gmail.com
            <br />
            Adress: Morotsvägen 10, Boden 96147
          </p>
        </div>
      </div>
    </div>
  );
};
