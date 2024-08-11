import React, { useState } from "react";
import Statistics from "../Components/Statostocs/Statistics";
import { staticDatas } from "../Datas";
import Chart from "../Components/Chart/Chart";
import NewUsersList from "../Components/NewUsersList/NewUsersList";
import {users} from '../Datas'

function Home() {
  const [staticsDatas, setStaticDatas] = useState(staticDatas);
  const [newUsers, setNewUsers] = useState(users.slice(4))

  return (
    <div className="Home">
      <h4>آمار</h4>
      <div
        className="Main-content"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {staticsDatas.map((data) => {
          return <Statistics {...data} />;
        })}
      </div>
      <h4>نمودار</h4>
      <div>
        <Chart />
      </div>
      <h4>آخرین کاربران</h4>
      <div>
        <NewUsersList list={newUsers} />
      </div>
    </div>
  );
}

export default Home;
