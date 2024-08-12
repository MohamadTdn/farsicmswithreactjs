import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "@mui/material";

function Products() {
  const [productList, setProductList] = useState([]);

  async function getProductsFromAPI() {
    await fetch(
      "https://farsicmsdb-25ad0-default-rtdb.firebaseio.com/products.json",
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductList((prevList) => {
          return (prevList = Object.entries(data));
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
    getProductsFromAPI();
  });

  async function deleteProduct (productId) {
    await fetch(
      `https://farsicmsdb-25ad0-default-rtdb.firebaseio.com/products/${productId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err = new Error("cant delete this object");
        console.error(err);
      })
      .finally(() => {
        console.log("done");
      });
  };

  useEffect(() => {
    getProductsFromAPI()
  }, [productList])

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
          {productList.map((product) => {
            return (
              <tr key={product[0]}>
                <td>{product[1].id}</td>
                <td>{product[1].title}</td>
                <td>{product[1].price}</td>
                <td>{product[1].count}</td>
                <td>
                  <img
                    style={{ width: "40px", borderRadius: "50%" }}
                    className="Product-img"
                    src={product[1].img}
                    alt=""
                  />
                </td>
                <td>
                  <Button
                    onClick={() => deleteProduct(product[0])}
                    variant="contained"
                    color="error"
                  >
                    حذف
                  </Button>
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
