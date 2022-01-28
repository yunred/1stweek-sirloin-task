import React, {useState, useContext} from 'react';
import { PDcontext } from 'store/PDdata.js';
import Container from "Component/Container";
import Toggle from 'Util/Toggle';
//import * as S from '/Compnent/PDMileage/style.js';


const PDMheader = () => {
    return(
        <h2>상품 혜택 허용 결정</h2>
    )
}

const PDMContent = () => {
    const context = useContext(PDcontext).PDMileage;
    const state = context.state;
    const setState = context.setState;

    return(
        <Toggle state={state} setState={setState}/>
    )
}

const PDMileage = () => {
    const context = useContext(PDcontext).PDMileage;
    const state = context.state;
    const setState = context.setState;
    return(
        <Container
        ContainerHeader = {
            <PDMheader />
        } 
        ContainerContent = {
            <PDMContent/>
        }
        />
    )
}

export default PDMileage