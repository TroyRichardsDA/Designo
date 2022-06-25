import React from "react";
import { ReactComponent as Passionate } from "../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as Resourceful } from "../assets/home/desktop/illustration-resourceful.svg";
import { ReactComponent as Friendly } from "../assets/home/desktop/illustration-friendly.svg";
import { ReactComponent as Background } from "../assets/shared/desktop/bg-pattern-small-circle.svg";

const Details = () => {
  return (
    <section className="details">
      <div className="details__section">
        <div className="details__img--wrapper">
          <Passionate />
          <Background className="details__img--bg" />
          <h2 className="details__section--title">Passionate</h2>
          <p className="details__section--para">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="details__section">
        <div className="details__img--wrapper">
          <Resourceful />
          <Background className="details__img--bg" />
          <h2 className="details__section--title">RESOURCEFUL</h2>
          <p className="details__section--para">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className="details__section">
        <div className="details__img--wrapper">
          <Friendly />
          <Background className="details__img--bg" />
          <h2 className="details__section--title">Friendly</h2>
          <p className="details__section--para last">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;