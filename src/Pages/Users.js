import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function Users() {
  const [userList, setUserList] = useState([]);

  async function getFromAPI() {
    await fetch(
      "https://farsicmsdb-25ad0-default-rtdb.firebaseio.com/users.json",
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserList((prevList) => {
          return (prevList = Object.entries(data));
        });
      })
      .catch((error) => {
        error = new Error("cant get from api");
        console.error(error);
      })
      .finally(() => {
        console.log("done");
      });
  }

  useEffect(() => {
    getFromAPI();
  }, []);

  async function deleteUser(userId) {
    await fetch(
      `https://farsicmsdb-25ad0-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        error = new Error("cant delete this object");
        console.error(error);
      })
      .finally(() => {
        console.log("done");
      });
  }

  useEffect(() => {
    getFromAPI();
  }, [userList]);

  return (
    <div>
      <h4>کاربران</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>نام</th>
            <th>سن</th>
            <th>عکس پروفایل</th>
            <th>تغییرات</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user[0]}>
                <td>{user[1].id}</td>
                <td>{user[1].name}</td>
                <td>{user[1].age}</td>
                <td>
                  <img className="Profile-img" style={{width: '40px', height: '40px'}} src={user[1].img} alt="" />
                </td>
                <td>
                  <Button
                    onClick={() => deleteUser(user[0])}
                    variant="contained"
                    color="error"
                  >
                    حذف
                  </Button>
                  <Link to={`/edituser/${user[0]}`}>
                    <button
                      style={{
                        padding: "5px 15px",
                        margin: "10px",
                        backgroundColor: "blue",
                        color: "#ffff",
                        border: "none",
                      }}
                      className="edit-btn"
                    >
                      <MdEdit />
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
