import React from "react";
import history from "../history";

const Number = () => {
  const obj = { groupName : "test", msisdn : "", ErrorMsg : ""}; ;

  const onDigitClick = digit => {
    if (obj.msisdn.length === 11) return;

    obj.msisdn = `${obj.msisdn}${digit}`;
    console.log(obj.msisdn);
  };

  const onDigitRemove = () => {
    obj.msisdn = obj.msisdn.substring(0, obj.msisdn.length - 1);
    console.log(obj.msisdn);
  };

  const validateMobileNumber = () => {
    const phoneno = new RegExp(/^(?=\d{11}$)(01)\d+$/);
    if (phoneno.test(obj.msisdn)) {
        obj.ErrorMsg = "";
      history.push(`/Wheel/${obj.msisdn}/${obj.groupName}`);
    } else {
        obj.ErrorMsg = "Wrong mobile number, please enter the right number";
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
                {obj.msisdn}
              </div>

              <p className="wrong-msg" id="errormsg">
                {obj.ErrorMsg}
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
