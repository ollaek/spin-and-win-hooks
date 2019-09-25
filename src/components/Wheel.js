import React, { useRef } from "react";
import ConfigurationsHook from "../hooks/ConfigurationsHook";
import SelectedOfferHook from "../hooks/SelectedOfferHook";
import { SubscribetoOffer } from "../Actions";
import history from '../history';

const Wheel = ({match}) => {
    debugger;
  const { msisdn, groupName } = match.params;
  const configs = ConfigurationsHook(groupName);
  const Offer = SelectedOfferHook(msisdn, groupName);
  
  const mainwheelRef = useRef(null);
  const wheelRef = useRef(null);
  const spinRef = useRef(null);
 
  

  console.log(configs);
  console.log(Offer);
  
  
  const spinTheWheel = () => {
    const degree = 3600;
    if(!configs && !Offer) return;
    const rand = (360 / Offer.TotalOffersNumber) * (Offer.OfferOrder - 1);
    const wheelImage = configs.BachgroundImagePath;
    
    const totalDegree = degree + rand;

    let done = 0;
    const sec = wheelRef.current.children ? wheelRef.current.children : [];

    [...sec].map(() => {
      let c = 0;
      const n = 700;
      const interval = setInterval(() => {
        c++;

        if (c === n) {
          clearInterval(interval);

          mainwheelRef.current.backgroundImage = wheelImage;

          if (done === 0) {
            done = 1;
            Subscribe(msisdn, Offer);
          }
        }
      }, 10);

      spinRef.current.style.transform = `rotate(${totalDegree}deg)`;
    });
  };

  const Subscribe = (msisdn, Offer) => {
    const subscriptionResult = SubscribetoOffer(msisdn, Offer.offerNumber);
    const offerId = Offer.OfferId;
    if (subscriptionResult.ErrorCode === 0) {
      history.push(`/Gift/${offerId}`);
    } else {
      history.push("/ErrorPage");
    }
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
        <div id="wrapper" style={{ marginBottom: "118px" }}>
          <div id="wheel" ref={mainwheelRef}>
            <div id="inner-wheel" ref={wheelRef}>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
            </div>
            <div className="spin-click" id="spin" onClick={spinTheWheel} ref={spinRef}>
              <div id="inner-spin">
                <img
                  className="img-fluid"
                  src="../../Content/img/spinner.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="spinner-btn spin-click" onClick={spinTheWheel}>
            <img
              className="img-fluid"
              src="../../Content/img/spinner-btn.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Wheel;
