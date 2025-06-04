import "./style.css";
import * as React from "react";

export const LightFrame = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <main className="container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2abbb97f128531db379dfe39a6d20ef5170bd95?placeholderIfAbsent=true"
          alt="Media"
          className="hero-image"
        />
        <div className="placeholder-div" />
        <header className="header-container">
          <h1 className="main-title">LightFrame</h1>
          <h2 className="subtitle">
            - Safety and Visibility for the Future of Cycling
          </h2>
        </header>
        <section className="description-container">
          <p className="body-text">
            <span className="highlighted-text">
              LightFrame is an innovative project aimed at improving cyclist
              safety by enhancing visibility in traffic. The product combines a
              projected light frame around the bicycle with a user-friendly
              mobile app, creating a clear and active indication of the
              cyclist's position—regardless of weather or lighting conditions.
            </span>
            <br />
            <br />
            <span>
              Throughout the development process, I worked on both hardware and
              software aspects, including the GPS-assisted navigational system,
              LED light control, and app-based data visualization. I gained
              hands-on experience with system integration, product design, and
              user-focused safety solutions.
            </span>
            <br />
          </p>
          <p className="bold-text">
            LightFrame was not only a fun and rewarding challenge—it pushed us
            to think creatively about how technology can contribute to a safer
            and more aware traffic environment.
          </p>
        </section>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88f40cba918d13ec2dff9f22959c2e6936f2c9fd?placeholderIfAbsent=true"
          alt="Media"
          className="bottom-left-image"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6f0765d6d8ec0dd9489efd29334e42ae795b8ec?placeholderIfAbsent=true"
          alt="Union_Bike_Cpl._v1_2025-Mar-19_12-30-24PM-000_CustomizedView7597435580"
          className="bottom-right-image"
        />
        <footer className="read-more-link">
          Read more: <a href="https://lightframe.tekpro.se" target="_blank">https://lightframe.tekpro.se/</a>
        </footer>
      </main>
    </>
  );
};
