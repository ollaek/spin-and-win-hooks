import React, { useState, useEffect } from "react";
import history from "../history";

const Number = () => {
  const obj = { groupName: "test" };

  const [msisdn, setMsisdn] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onDigitClick = digit => {
    if (msisdn.length === 11) return;

    setMsisdn(msisdn + digit);
    console.log(msisdn);
  };

  const onDigitRemove = () => {
    const subedmsisdn = msisdn.substring(0, msisdn.length - 1);
    setMsisdn(subedmsisdn);
    console.log(msisdn);
  };

  const validateMobileNumber = () => {
    const phoneno = new RegExp(/^(?=\d{11}$)(01)\d+$/);
    let ErrorMsg = "";
    if (phoneno.test(msisdn)) {
      ErrorMsg = "";
      setErrorMsg(ErrorMsg);
      history.push(`/Wheel/${msisdn}/${obj.groupName}`);
    } else {
      ErrorMsg = "Wrong mobile number, please enter the right number";
      setErrorMsg(ErrorMsg);
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
        <div id="wrapper">
          <div className="dial-pad">
            <div>
              <div className="shadow" id="output">
                {msisdn}
              </div>

              <p className="wrong-msg" id="errormsg">
                {errorMsg}
              </p>

              <div className="digits">
                <div className="row">
                  <div className="digit" onClick={() => onDigitClick(1)}>
                    1
                  </div>
                  <div className="digit" onClick={() => onDigitClick(2)}>
                    2
                  </div>
                  <div className="digit" onClick={() => onDigitClick(3)}>
                    3
                  </div>
                </div>
                <div className="row">
                  <div className="digit" onClick={() => onDigitClick(4)}>
                    4
                  </div>
                  <div className="digit" onClick={() => onDigitClick(5)}>
                    5
                  </div>
                  <div className="digit" onClick={() => onDigitClick(6)}>
                    6
                  </div>
                </div>
                <div className="row">
                  <div className="digit" onClick={() => onDigitClick(7)}>
                    7
                  </div>
                  <div className="digit" onClick={() => onDigitClick(8)}>
                    8
                  </div>
                  <div className="digit" onClick={() => onDigitClick(9)}>
                    9
                  </div>
                </div>
                <div className="row">
                  <div className="botrow" onClick={() => onDigitRemove()}>
                    <i className="fa fa-angle-left dig" aria-hidden="true">
                      <span
                        style={{ fontSize: "22px", fontFamily: "monospace" }}
                      >
                        x
                      </span>
                    </i>
                  </div>
                  <div className="digit" onClick={() => onDigitClick(0)}>
                    0
                  </div>
                  <button
                    className="botrow submit"
                    onClick={validateMobileNumber}
                  >
                    <i className="fa fa-angle-right dig" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
