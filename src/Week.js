import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Week = (props) => {
  // useHistory 훅 사용
  const history = useHistory();

  // 요일 담은 배열
  const DayOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

  // 평점 평균 구하기
  // 평점 합계를 담아두는 변수
  let rate_sum = 0;

  const week_rates = DayOfWeek.map((w, idx) => {
    // 숫자 범위 지정
    // Math.random() * (최댓값 - 최솟값) + 최소값
    // Math.floor 사용하여 자연수로 변경
    // Math.floor(Math.random() * (최댓값 - 최솟값) + 최소값)
    const random = Math.floor(
      Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1);
    rate_sum += random;
    return { day: w, rate: random };
  });

  // 평점 합계의 평균을 담아두는 변수
  const rate_avg = (rate_sum / week_rates.length).toFixed(1);
  const [avg, setAvg] = useState(rate_avg);


  // 화면에 뿌리는 함수
  const DayRepeat = week_rates.map((w, idx) => {
    return (
      <div className="circleBox">
        <div id="day" key={`week_day_${idx}`}>{w.day}</div>

        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <div id="circle" key={idx}
              style={{ backgroundColor: w.rate < idx ? "grey" : "gold" }}></div>

          )
        })}

        <div id="triangle" onClick={() => { history.push(`/choice/${w.day}`) }}></div>
      </div>
    )
  }
  )

  // 화면에 뿌리기 
  
  return (
    <>
      <h1>내 일주일은?</h1>
      {DayRepeat}
      <div>
        <h3>평균 평점</h3>
        <h3>{avg}</h3>
        <button id="reset"
          onClick={() => {
            setAvg(parseInt(0).toFixed(1));
          }}>Reset</button>
      </div>
    </>
  )
}



export default Week;