import styled from 'styled-components';

export const ProductInfoNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em;
  font-size: 1.3rem;
  margin: 0 auto;
  input,
  .more_button {
    border: 0.1em solid rgb(227, 227, 227);
    border-radius: 4px;
    background: none;
    height: 40px;
  }
  .more_button {
    margin-bottom: 40px;
  }

  h4 {
    margin-top: 0;
  }

  .title {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .top_container {
    padding: 20px;
  }
  .info_notify > div {
    display: flex;
    margin-bottom: 10px;
    padding: 10px;
  }
  .info_notify > div > span {
    width: 40%;
    margin: auto 0;
  }
  .info_notify > div > input {
    width: 60%;
  }
  .more_info {
    .more_info_title {
      width: 35%;
      margin-right: 30px;
    }
    .input_button {
      display: flex;
      justify-content: space-between;
      width: 60%;
    }
    .more_info_content {
      width: 80%;
    }
    button {
      width: 17%;
    }
  }
  .add_order_btn {
    padding: 40px;
    height: 15px;
    background: none;
    margin: auto 0;
  }
`;
