import React from "react";
import Statistics from "../Components/Statostocs/Statistics";
import { staticDatas } from "../Datas";
import Chart from "../Components/Chart/Chart";

function Home() {
  return (
    <div className="Home">
      <h4>آمار</h4>
      <div
        className="Main-content"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {staticDatas.map((data) => {
          return <Statistics {...data} />;
        })}
      </div>
      <h4>نمودار</h4>
      <div>
        <Chart/>
      </div>
    </div>
  );
}

export default Home;
