import React from "react";
import offerImageHook from "../hooks/OfferImageHook";
import { Link } from "react-router-dom";

const Gift = ({match}) => {
  const offerImage = offerImageHook(match.params);

  const renderImage = () => {
    if (!offerImage.Offer) {
      return "";
    }
    return offerImage.Offer.Deals[0].Image;
  };

  return (
    <div className="container">
      <div className="top-title">
        <img
          className="img-fluid big-win"
          src="../../Content/img/spin-win.png"
          alt=""
        />
      </div>
      <div>
        <div id="wrapper" style={{ marginTop: "1rem", marginBottom: "118px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexFlow: "column"
            }}
          >
            <div>
              <img
                style={{ width: "240px", marginTop: "15px" }}
                className="img-fluid big-win"
                src={renderImage()}
                alt=""
              />
            </div>
            <Link
              style={{
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                marginTop: "-55px",
                marginBottom: "-50px"
              }}
              to="/"
            >
              <img
                style={{ width: "200px", cursor: "pointer" }}
                src="../../Content/img/retry.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
