import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewProducts() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const productTitleHandler = (e) => {
    setTitle((prevState) => {
      return (prevState = e.target.value);
    });
  };

  const productCountHandler = (e) => {
    setCount((prevState) => {
      return (prevState = e.target.value);
    });
  };

  const productPriceHandler = (e) => {
    setPrice((prevState) => {
      return (prevState = e.target.value);
    });
  };

  const productImageSrcHandler = (e) => {
    setImageSrc((prevState) => {
      return (prevState = e.target.value);
    });
  };

  async function addProductHandler(e) {
    e.preventDefault();

    let newProduct = {
      id: Math.random() * 10000,
      title: title,
      price: price,
      count: count,
      img: imageSrc,
    };

    await fetch(
      "https://farsicmsdb-25ad0-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err = new Error("cant post this object");
        console.error(err);
      })
      .finally(() => {
        console.log("done");
      });
  }

  return (
    <div>
      <h4>محصول جدید</h4>
      <Form onSubmit={addProductHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>نام محصول</Form.Label>
          <Form.Control
            onChange={productTitleHandler}
            type="text"
            placeholder="نام محصول را وارد کنید"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>تعداد</Form.Label>
          <Form.Control
            onChange={productCountHandler}
            type="number"
            placeholder="تعداد را وارد کنید"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>قیمت</Form.Label>
          <Form.Control
            onChange={productPriceHandler}
            type="number"
            placeholder="قیمت را وارد کنید"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>آدرس عکس</Form.Label>
          <Form.Control
            onChange={productImageSrcHandler}
            type="text"
            placeholder="آدرس عکس را وارد کنید"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          ثبت
        </Button>
      </Form>
    </div>
  );
}

export default NewProducts;
