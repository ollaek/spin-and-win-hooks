import { useState, useEffect } from "react";
import Couponz from "../APIs/Couponz";

const OfferImageHook = offerId => {
  const [OfferImage, setOfferImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const { data } = await Couponz.get(
            `api/Deals/getdealdetails?offerId=${offerId}`
        );
        setOfferImage(data);
      };
  
      fetchData();
  }, [offerId]);

  return OfferImage;
};

export default OfferImageHook;
