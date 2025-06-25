import React from "react";
import "./TalkToExpert.css";

function TalkToExpert() {
  return (
    <section className="talk-expert-section">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "left" }}>
          TALK TO OUR EXPERT
        </h2>
        <div className="talk-expert-content">
          <form className="expert-form">
            <label>
              NAME
              <input type="text" name="name" required />
            </label>
            <label>
              EMAIL
              <input type="email" name="email" required />
            </label>
            <label>
              MOBILE NUMBER
              <input type="tel" name="mobile" required />
            </label>
            <label>
              MESSAGE
              <textarea name="message" rows={3} required />
            </label>
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
          <div className="expert-contact-info">
            <div>
              <strong>PHONE NUMBER</strong>
              <p>(+91) 96061 25333</p>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <strong>ADDRESS INFO</strong>
              <p>
                #48, Lavelle Road, Hitananda II, 1st Floor,<br />
                Bangalore 560001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalkToExpert;