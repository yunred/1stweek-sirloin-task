import React,{ createContext, useState } from 'react';

export const PDcontext = createContext();

const PDdata = (props) => {
    const [OptionSetList, setOptionLIst] = useState([]);
    const [ProductInfoList, setProductInfoLIst] = useState([]);
    
    const PDdata = {
        OptionSetData: {
            state: OptionSetList,
            setstate: setOptionLIst
        },
        PIData: {
            state: ProductInfoList,
            setState: setProductInfoLIst
        }
    }

    return <PDcontext.Provider value={PDdata}>{props.children}</PDcontext.Provider>
}

export default PDdata