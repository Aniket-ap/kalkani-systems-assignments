import React from "react";
import "./card.css";
import { GiTireIronCross } from "react-icons/gi";
import { BiLinkExternal, BiTime } from "react-icons/bi";

const Card = ({details}) => {
  return (
    <section className="main-container">
      <div className="cross-box">
        <GiTireIronCross size={25} />
      </div>
      <div className="information">
        <p>{details.domain}</p>
        <div className="information-date">
          <span style={{ marginRight: "5px" }}>
            {" "}
            <BiTime className="time-icon" size={15} /> Modified at 25th june,
            2020
          </span>
          <span>
            {" "}
            <BiTime className="time-icon" size={15} /> Modified at 25th june,
            2020
          </span>
        </div>
        <div className="ip-add">
          @ <span>80.85.156.55</span>
        </div>
      </div>
      <div className="redirect">
        <BiLinkExternal size={35} />
      </div>
    </section>
  );
};

export default Card;
