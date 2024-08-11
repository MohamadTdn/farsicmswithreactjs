import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewProducts() {
  return (
    <div>
      <h4>محصول جدید</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>نام محصول</Form.Label>
          <Form.Control type="text" placeholder="نام محصول را وارد کنید" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>تعداد</Form.Label>
          <Form.Control type="number" placeholder="تعداد را وارد کنید" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>قیمت</Form.Label>
          <Form.Control type="number" placeholder="قیمت را وارد کنید"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>آدرس عکس</Form.Label>
          <Form.Control type="text" placeholder="آدرس عکس را وارد کنید" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewProducts;
