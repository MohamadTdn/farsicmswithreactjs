import React from "react";
import "./Transactions.css";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function Transactions({ transactionsList }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>نام</th>
            <th>مبلغ</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {transactionsList.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.owner}</td>
                <td>{item.price}</td>
                <td>{item.status == 'success' ? (
                    <Button variant="success">موفق</Button>
                ) : item.status == 'fail' ? (
                    <Button variant="danger">نا موفق</Button>
                ) : (
                    <Button variant="secondary">در حال پردازش</Button>
                ) }</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Transactions;
