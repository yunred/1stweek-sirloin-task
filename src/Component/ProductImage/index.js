import Container from "Component/Container";
import React from "react";
import * as S from "./style";
import SelectImg from "Util/SelectImg";
import { useState, useContext, useEffect } from "react";
import { PDcontext } from "store/PDdata.js";

/*

props = {
  productIntroduceImg:[],
  productBuyerImg:[],
}

*/

const PDIntroduceHeader = () => {
  return <h4>상품 소개 이미지</h4>;
};

const PDIntroduceContent = () => {
  const [PDIntroduceImg, setPDIntroduceImg] = useState([]);
  const PDImageContext = useContext(PDcontext).PDImage;
  const state = PDImageContext.state;
  const setState = PDImageContext.setState;


  useEffect(()=>{
    const newState = {...state}

    if(PDIntroduceImg.length > 0){
      const newItem = PDIntroduceImg.pop();
      PDIntroduceImg.unshift(newItem);
    } 
    newState.productIntroduceImg = PDIntroduceImg;
    setState(newState);
    
  },[PDIntroduceImg])

  useEffect(()=>{
    console.log("PDImage: ",state)
  },[state])

  return (
    <S.InnerContainer>
      <SelectImg imgList={PDIntroduceImg} imgSetter={setPDIntroduceImg} />
      <S.ImageContainer>
        {state.productIntroduceImg.length > 0 &&
          state.productIntroduceImg.map((item, index) => {
            return <S.ImageItem key={index}>{item.name}</S.ImageItem>;
          })}
      </S.ImageContainer>
    </S.InnerContainer>
  );
};

const PDBuyerHeader = () => {
  return <h4>구매자 추천 이미지</h4>;
};

const PDBuyerContent = () => {
  const [PDBuyerImg, setPDBuyerImg] = useState([]);
  const PDImageContext = useContext(PDcontext).PDImage;
  const state = PDImageContext.state;
  const setState = PDImageContext.setState;

  return (
    <S.InnerContainer>
      <SelectImg imgList={PDBuyerImg} imgSetter={setPDBuyerImg} />
      <S.ImageContainer></S.ImageContainer>
    </S.InnerContainer>
  );
};

const ProductImage = () => {
  return (
    <S.ProductImageContainer>
      <Container
        ContainerHeader={<PDIntroduceHeader />}
        ContainerContent={<PDIntroduceContent />}
      />
      <Container
        ContainerHeader={<PDBuyerHeader />}
        ContainerContent={<PDBuyerContent />}
      />
    </S.ProductImageContainer>
  );
};

export default ProductImage;
