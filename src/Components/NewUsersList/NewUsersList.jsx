import React from "react";
import "./NewUsersList.css";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'

function NewUsersList({ list }) {
  return (
    <div className="NewUsersList">
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
          {list.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <img className="Profile-img" src={item.imgSrc} alt="" />
                </td>
                <td>
                  <Button variant="danger">حذف</Button>
                  <Button variant="primary">ویرایش</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default NewUsersList;
