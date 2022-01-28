import React,{ createContext, useState } from 'react';

export const MDContext = createContext();

const MDdata = (props) => {
    const [OptionSetList, setOptionLIst] = useState([]);
    const [ProductInfoList, setProductInfoLIst] = useState([]);
    
    const MDdata = {
        OptionSetData: {
            state: OptionSetList,
            setstate: setOptionLIst
        },
        PIData: {
            state: ProductInfoList,
            setState: setProductInfoLIst
        }
    }

    return <MDContext.Provider value={MDdata}>{props.children}</MDContext.Provider>
}

export default MDdata