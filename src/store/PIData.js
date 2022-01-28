import React,{ createContext, useState } from 'react';

export const PIContext = createContext();

const PIdata = (props) => {
    const [ProductInfoList, setProductInfoLIst] = useState([]);
    const PIdata = {
        PIData: {
            state: ProductInfoList,
            setState: setProductInfoLIst
        }
    }

    return <PIContext.Provider value={PIdata}>{props.children}</PIContext.Provider>
}

export default PIdata