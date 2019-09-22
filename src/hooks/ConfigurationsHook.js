import { useState, userEffect } from "react";
import axios from "axios";

const ConfigurationsHook = groupName => {
    const [ configurations, setConfigurations ] = useState(null);

    userEffect(
        () => {
            (async groupName => {
                const response = await axios.get(
                    `api/SpinAndWin/GetSpinAndWinUIConfigurations?groupName=${groupName}`
                );

                setConfigurations(response.data);
            })(groupName);
        },[groupName]
    );

    return configurations;
};

export default ConfigurationsHook;


