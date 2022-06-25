import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Background } from "../assets/shared/desktop/bg-pattern-call-to-action.svg";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="call-to-action">
      <div className="call-to-action__wrapper">
        <Background className="call-to-action__bg" />
        <div className="call-to-action__content">
          <h2 className="call-to-action__content--header">
            Let’s talk about your project
          </h2>
          <p className="call-to-action__content--para">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="call-to-action__content--btn"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
