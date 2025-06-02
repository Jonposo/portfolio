import React from "react";
import "./style.css";

export const Desktop = () => {
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
                <a href="https://discord.com/" className="span" target="_blank"><img src="https://imgur.com/gallery/portfolio-eller-s-gUg1VCm#KKMQ0Wv" width="25" height="25" className="icon"></img> maxi2007</a>
                <br />
              </span>
            </p>

            <p className="text">
              <span className="span">
                <a href="https://www.instagram.com/maximiliankomposto/" className="span" target="_blank"><img src="./src/screens/Dekstop/assets/instagram.png" width="25" height="25" className="icon"></img>maximiliankomposto</a>
                <br />
              </span>
            </p>

            <p className="text">
              <span className="span">
                <a href="https://github.com/Jonposo" className="span" target="_blank"><img src="./src/screens/Dekstop/assets/github.png" width="25" height="25" className="icon"></img>Jonposo</a>
                <br />
              </span>
            </p>

            <p className="text">
              <span className="span">
                <a href="https://www.linkedin.com/in/maximilian-fabriani-pieksma-40498932a/" className="span" target="_blank"><img src="./src/screens/Dekstop/assets/linkedin.png" width="25" height="25" className="icon"></img>Maximilian Fabriani Pieksma</a>
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
            in scratch and simple programs in python. <br />
            <br />
            Now when i am older i have spent most of my time developing my
            skills related to website creation. During this school year i have
            developed a simple dating website, a control interface for robots
            powered by raspberry pi and finally this very site.
            <br />
            <br />
            In my sparetime i spend a lot of time with friends, playing
            videogames, boardgames or RPGs. I am also active in the Swedish Home
            Guard Youth (Hemvärnsungdomen). Additionally I also train at the gym
            several times per week.
          </p>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-3">
          <a href="./src/screens/Dekstop/assets/CV Maximilian Fabriani Pieksma.pdf">View full résumé:</a>
          </div>
        </div>

        <div className="overlap-2">
          <div className="project-card1">
            <img
              className="screenshot-from"
              alt="Screenshot from"
              src="https://c.animaapp.com/mHgkXrS7/img/screenshot-from-2025-05-20-12-42-48-1@2x.png"
            />

            <p className="vibb-online-vibb-is">
              <span className="text-wrapper-4">
                Vibb.online
                <br />
              </span>

              <span className="text-wrapper-5">
                Vibb is a new contender in the field of online dating. <br />
                Using a simple, but accurate, alghoritm to predict <br />
                matches and ensure you are happy with your match.
              </span>
            </p>
          </div>

          <div className="project-card2" onclick="window.location.href = '/src/screens/ROBERT/index.jsx';">
            <img
              className="screenshot-from"
              alt="Screenshot from"
              src="./src/screens/Dekstop/assets/robert.png"
            />

            <p className="r-o-b-e-r-t-robot">
              <span className="text-wrapper-4">
                R.O.B.E.R.T Robot project
                <br />
              </span>

              <span className="text-wrapper-5">
                ROBERT is a revolutionary development in remote control
                <br />
                robots. Utilizing the advanced ROBERT platform we have
                <br />
                managed to create all manner of games and tools, all <br />
                compatible with the ROBERT chassis.
              </span>
            </p>
          </div>

          <div className="project-card3">
            <img
              className="img"
              alt="Screenshot from"
              src="https://c.animaapp.com/mHgkXrS7/img/screenshot-from-2025-05-20-13-15-24@2x.png"
            />

            <p className="lightframe">
              <span className="text-wrapper-4">
                LightFrame
                <br />
              </span>

              <span className="text-wrapper-5">
                LightFrame is a advanced tool designed to make cycling
                <br />
                at night much safer and accessible. Using a state of the art
                <br />
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
