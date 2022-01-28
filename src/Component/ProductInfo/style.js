import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: center;
  padding: 20px;
  margin: 20px auto;
  font-size: 1.3rem;

  h4 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .filterBox {
    flex-direction: column;
  }
`;

export const Title = styled.span`
  width: 160px;
  min-height: 65px;
  display: flex;
  align-items: center;
`;

export const ItemContainer = styled.ul`
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  display: flex;
  border: 0.1em solid rgb(227, 227, 227);
  :not(:last-child) {
    border-bottom: none;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  padding: 10px 12px;
  width: 100%;
`;

export const ListContainer = styled.ul`
  height: 200px;
  overflow: scroll;
  width: ${(props) => props.width};
  border-radius: 4px;
`;

export const ListItem = styled.li``;

export const Tag = styled.li`
  background-color: #ddd;
  border: 1px solid cornflowerblue;
  border-radius: 4px;
  padding: 6px 8px;
  margin-bottom: 8px;
`;

export const Check = styled.input``;

export const InputContainer = styled.div`
  border: 0.1em solid rgb(227, 227, 227);
  border-radius: 4px;
  width: 100%;
  padding: 4px 6px;
  height: 50px;
  align-self: center;

  input {
    height: 100%;
    width: 95%;
    background: none;
    outline: none;
    border: none;
    font-size: 14px;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  span {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span:nth-child(1) {
    border-right: 1px solid #eee;
  }
`;

export const ScrollContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  width: 70%;
  padding: 4px 6px;

  input {
    height: 100%;
    width: 90%;
    background: none;
    outline: none;
    border: none;
  }
`;

export const FilterTagBox = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  padding: 6px 8px;

  .filterList {
    display: flex;
    li {
      margin-left: 10px;
      padding: 6px 8px;
      background-color: red;
      width: 100px;
      height: 30px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
