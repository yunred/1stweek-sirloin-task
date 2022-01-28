import React,{ createContext, useState } from 'react';

export const PDcontext = createContext();

const PDdata = (props) => {
    const [OptionSetList, setOptionLIst] = useState([]);
    const [ProductInfoList, setProductInfoLIst] = useState(PIData);
    
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

const PIData = {
    categoryList:[
    "카테고리1",
    "카테고리2",
    "카테고리3",
    "카테고리4",
    "카테고리5",
    "카테고리6",],
    filterTagList:[
    "필터태그1",
    "필터태그2",
    "필터태그3",
    "필터태그4",
    "필터태그5",
    "필터태그6",
    ],
    product:{
        category:[],
        filterTag:[],
        name:"",
        description:"",
        thumbnail:"",
        imgs:"",
        stock:"",
    }
}

export default PDdata