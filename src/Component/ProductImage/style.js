import styled from "styled-components";

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0 0 0 10px;
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

export const InnerContainer = styled.div`
  height: 100px;
  padding: 10px 12px;
  display: flex;
`;

export const ImageContainer = styled.ul`
  width: 80%;
  margin: 0 0 0 20px;
  overflow-y: scroll;
  list-style: none;

  &::-webkit-scrollbar {
    border-radius: 6px;
    background: none;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #c4c4bd;
  }
`;

export const ImageItem = styled.li``;
