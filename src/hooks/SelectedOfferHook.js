import { useState, useEffect } from "react";
import Couponz from "../APIs/Couponz";

const SelectedOfferHook = (msisdn, groupName) => {
  const [SelectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Couponz.get(
        `api/SpinAndWin/GetSpinAndWinOffer?msisdn=${msisdn}&groupName=${groupName}`
      );
      setSelectedOffer(data);
    };

    fetchData();
  }, [msisdn, groupName]);

  return SelectedOffer;
};

export default SelectedOfferHook;
