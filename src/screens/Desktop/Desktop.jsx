// src/screens/Desktop/Desktop.jsx
import React, { useState } from "react";
// Korrekt relativ väg: Desktop.jsx ligger i src/screens/Desktop/,
// och Robert‐komponenten finns i src/screens/ROBERT/index.jsx
import { Robert } from "../ROBERT/index.jsx";
import "./style.css";

export const Desktop = () => {
  // 1) local state: styr om Robert ska visas
  const [showRobert, setShowRobert] = useState(false);

  // 2) Om showRobert är true → rendera Robert + tillbaka‐knapp
  if (showRobert) {
    return (
      <div style={{ padding: "1rem" }}>
        <button
          onClick={() => setShowRobert(false)}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer"
          }}
        >
          ← Tillbaka till Desktop
        </button>
        <Robert />
      </div>
    );
  }

  // 3) Om showRobert är false → visa ordinarie Desktop‐layout
  return (
    <div className="desktop" data-model-id="1:2">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">Maximilian Bote Fabriani Pieksma</div>

          <p className="paketeringsansvarig">
            Paketeringsansvarig på <br />
            Expressen hos MAX Boden
          </p>

          <p className="p">“Utan mig går ni hungriga”</p>

          <p className="about-experiance">
            ---- About
            <br />
            ---- Experiance
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
                  {"  "}maxi2007
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
                  {"  "}maximiliankomposto
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
                  {"  "}Jonposo
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
                  {"  "}Maximilian Fabriani Pieksma
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
            Nu när jag är äldre har jag ägnat mestadels av min tid åt att
            utveckla mina kunskaper kring webb skapande. Under det här
            skolåret har jag utvecklat en enkel dejtingsida, ett kontrollgränssnitt
            för robotar med Raspberry Pi och slutligen denna egen webbplats.
            <br />
            <br />
            På fritiden umgås jag mycket med vänner, spelar videospel,
            brädspel eller rollspel. Jag är också aktiv i Hemvärnsungdomen.
            Dessutom tränar jag på gymmet flera gånger i veckan.
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
          <div className="project-card1">
            <img
              className="screenshot-from"
              alt="Screenshot from"
              src="https://c.animaapp.com/mHgkXrS7/img/screenshot-from-2025-05-20-12-42-48-1@2x.png"
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
            onClick={() => setShowRobert(true)}
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
          <div className="project-card3">
            <img
              className="img"
              alt="Screenshot from"
              src="https://c.animaapp.com/mHgkXrS7/img/screenshot-from-2025-05-20-13-15-24@2x.png"
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
