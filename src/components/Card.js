import React from "react";
import "./card.css";
import { GiTireIronCross } from "react-icons/gi";
import { BiLinkExternal, BiTime } from "react-icons/bi";

import moment from "moment";
import Moment from "react-moment";

const Card = ({ details }) => {
  const updateDateFormat = `${details?.update_date}`;
  const createdDateFormat = `${details?.create_date}`;

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
            <BiTime className="time-icon" size={15} /> Modified at{" "}
            <Moment format="Do MMM YYYY" date={updateDateFormat} />
          </span>
          <span>
            {" "}
            <BiTime className="time-icon" size={15} /> Created at{" "}
            <Moment format="Do MMM YYYY" date={createdDateFormat} />
          </span>
        </div>
        {details.A !== null && (
          <div className="ip-add">
            {details.A?.map((value, index) => (
              <React.Fragment key={index.toString()}>
                <span style={{ marginRight: "5px" }}>{value}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      <div className="redirect">
        {details.isDead === "False" && <BiLinkExternal size={35} />}
      </div>
    </section>
  );
};

export default Card;
