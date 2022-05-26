import React from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


const Choice = (props) => {

  const history = useHistory();

  const params = useParams();

  const [rate, setRate] = React.useState(0);


  return (
    <>
      <div className="choiceTitle"><span id="get_day">{params.get_day}요일</span>  평점 남기기</div>
      {/* 동그라미 5개를 만들어볼까요! */}
      <div className="circleBox choiceBox">
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <div key={idx} id="circle"
              onClick={() => {
                setRate(idx + 1);
              }}
              style={{
                backgroundColor: rate < idx + 1 ? "grey" : "orange",
              }}
            ></div>
          );
        })}
      </div>

      <button id="submit" onClick={() => {
        history.goBack();
      }}>평점 남기기</button>
    </>
  )
}

export default Choice;