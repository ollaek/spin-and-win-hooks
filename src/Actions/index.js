import Couponz from "../APIs/Couponz";

export const SubscribetoOffer = (msisdn, offerNumber) => {
      
    let result = {};
      const fetchData = async () => {
        const { data } = await Couponz.get(
          `api/couponz/subscribetooffer?environment=flex&msisdn=${msisdn}&offernumber=${offerNumber}&rateplan=419&channel=OnLine&forceXmlResult=false`
        );

        result = data;
      };
  
      fetchData();
  
    
  
    return result;
  }; 
