import { useState, useEffect } from "react";
import Couponz from "../APIs/Couponz";

const SubscriptionHook = (msisdn, offerNumber) => {
  const [SubscriptionResult, setSubscriptionResult] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      const { data } = await Couponz.get(
        `api/couponz/subscribetooffer?environment=flex&msisdn=${msisdn}&offernumber=${offerNumber}&rateplan=419&channel=OnLine&forceXmlResult=false`
      );
      setSubscriptionResult(data);
    };

    fetchData();

  }, [msisdn, offerNumber]);

  return SubscriptionResult;
};

export default SubscriptionHook;
