import React, { useEffect, useState } from "react";
import Statistics from "../Components/Statostocs/Statistics";
import { staticDatas } from "../Datas";
import Chart from "../Components/Chart/Chart";
import NewUsersList from "../Components/NewUsersList/NewUsersList";
import Transactions from "../Components/Transactions/Transactions";
import { users } from "../Datas";
import { TransactionsList } from "../Datas";

function Home() {
  const [staticsDatas, setStaticDatas] = useState(staticDatas);
  const [newUsers, setNewUsers] = useState([]);
  const [transactionList, setTransactionList] = useState(TransactionsList);

  async function getUsersFromAPI() {
    await fetch("https://farsicmsdb-25ad0-default-rtdb.firebaseio.com/users.json", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNewUsers((prevState) => {
          return (prevState = Object.entries(data));
        });
      })
      .catch((err) => {
        err = new Error("cant get from api");
        console.error(err);
      })
      .finally(() => {
        console.log("done");
      });
  }

  useEffect(() => {
    getUsersFromAPI()
  }, []);

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
      <h4>نراکنش ها</h4>
      <div>
        <Transactions transactionsList={transactionList} />
      </div>
    </div>
  );
}

export default Home;
