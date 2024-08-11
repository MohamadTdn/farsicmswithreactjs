import React from "react";
import { products } from "../Datas";
import Table from "react-bootstrap/Table";
import { Button } from "@mui/material";

function Products() {
  return (
    <div>
      <h4>محصولات</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>نام</th>
            <th>تعداد</th>
            <th>قیمت</th>
            <th>تغییرات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.count}</td>
                <td>
                  <img style={{width: '40px', borderRadius: '50%'}} className="Product-img" src={product.imgSrc} alt="" />
                </td>
                <td>
                  <Button variant="contained" color="error">حذف</Button>
                  <Button variant="contained">ویرایش</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
