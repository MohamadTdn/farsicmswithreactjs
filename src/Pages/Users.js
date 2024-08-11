import React from "react";
import Table from "react-bootstrap/Table";
import { users } from "../Datas";
import { Button } from "@mui/material";
import { MdEdit } from "react-icons/md";

function Users() {
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
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <img className="Profile-img" src={user.imgSrc} alt="" />
                </td>
                <td>
                  <Button variant="contained" color="error">حذف</Button>
                  <button style={{padding: '5px 15px', margin: '10px', backgroundColor: 'blue', color: '#ffff', border: 'none'}} className="edit-btn"><MdEdit/></button>
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
