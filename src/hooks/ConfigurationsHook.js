import { useState, useEffect } from "react";
import Couponz from "../APIs/Couponz";

const ConfigurationsHook = groupName => {
  const [configurations, setConfigurations] = useState(null);
 debugger;
  useEffect(() => {

    const fetchData = async () => {
        const { data } = await Couponz.get(`api/SpinAndWin/GetSpinAndWinUIConfigurations?groupName=${groupName}`);
        setConfigurations(data);
    };

    fetchData();

  }, [groupName]);

  return configurations;
};

export default ConfigurationsHook;
