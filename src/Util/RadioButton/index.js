import React, { useState } from "react";
import DateTimePickers from "Util/DateTimePicker";
import Box from "@mui/material/Box";
import * as Style from "./style";

const RedioButton = (props) => {
  const [startDate, setstartDate] = useState([null, null]);
  const [endDate, setendDate] = useState([null, null]);

  const [clickedCondition, setclickedCondition] = useState({
    selectValue: "제한 없음",
  });
  const [periodsData, setPeriodData] = useState(`상품 판매 기한 : 제한 없음`);

  const PeriodChange = (e) => {
    setPeriodData(`상품 판매 기한 : ${e.target.value}`);
    console.log(e.target.value);
    setclickedCondition({
      selectValue: e.target.value,
    });
  };
  console.log(periodsData);
  console.log(`시작 날짜: ${startDate}`);
  console.log(`마지막 날짜: ${endDate}`);
  return (
    <Style.ProductListContainer>
      <Style.ContentsBox>
        <Style.Box>
          <Style.Input
            id="periodShow"
            type="radio"
            name="group2"
            value="제한 없음"
            checked={clickedCondition.selectValue === "제한 없음" ? true : null}
            onChange={PeriodChange}
          />
          <label for="periodShow">
            <span>제한 없음</span>
          </label>
        </Style.Box>
        <Style.Box>
          <Style.Input
            id="periodHide"
            type="radio"
            name="group2"
            value="미판매"
            checked={clickedCondition.selectValue === "미판매" ? true : null}
            onChange={PeriodChange}
          />
          <label for="periodHide">
            <span>미판매</span>
          </label>
        </Style.Box>
        <Style.Box>
          <Style.Input
            id="periodSetting"
            type="radio"
            name="group2"
            value="판매 기간 설정"
            checked={clickedCondition.selectValue === "판매 기간 설정"}
            onChange={PeriodChange}
          />
          <label for="periodSetting">
            <span>판매 기간 설정</span>
          </label>
        </Style.Box>
        <Style.DateTimePickersContainer>
          <DateTimePickers />
          <Box sx={{ mx: 0.1 }}>
            &nbsp;&nbsp;&nbsp;&nbsp; ~&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </Box>
          <DateTimePickers />
        </Style.DateTimePickersContainer>
      </Style.ContentsBox>
    </Style.ProductListContainer>
  );
};

export default RedioButton;
