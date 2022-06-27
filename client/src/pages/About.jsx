import React from "react";
import { ReactComponent as Background } from "../assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import ImgOne from "../assets/about/mobile/image-about-hero.jpg";
import ImgTwo from "../assets/about/mobile/image-world-class-talent.jpg";
import { Sites } from "../components/UI";

const About = () => {
  return (
    <main className="about">
      <figure className="about__img--wrapper">
        <img src={ImgOne} alt="" />
      </figure>
      <div className="about__about-us">
        <div className="about__about-us--content">
          <h2 className="about__about-us--title">About Us</h2>
          <p className="about__about-us--para">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <Background className="about__bg" />
      </div>
      <figure className="about__img--wrapper">
        <img src={ImgTwo} alt="" />
      </figure>
      <div className="about__world-class">
        <div className="about__world-class--conent">
          <h2 className="about__world-class--title">World-class talent</h2>
          <p className="about__world-class--para">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="about__world-class--para">
            Our team is multi-disciplinary and we are not merely interested in
            form -- content and meaning are just as important. We give great
            importance to craftsmanship, service, and and prompt delivery.
            Clients have always been impressed with out high-quality outcomes
            that encapsulates their brand's story and mission.
          </p>
          <Background className="about__bg" />
        </div>
      </div>

      <Sites />
    </main>
  );
};

export default About;
