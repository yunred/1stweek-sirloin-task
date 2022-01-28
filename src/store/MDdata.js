import React,{ createContext, useState } from 'react';

export const MDContext = createContext();

const MDdata = (props) => {
    const [OptionSetList, setOptionLIst] = useState([]);
    const MDdata = {
        OptionSetData: {
            state: OptionSetList,
            setstate: setOptionLIst
        }
    }

    return <MDContext.Provider value={MDdata}>{props.children}</MDContext.Provider>
}

export default MDdata