import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewUser() {
  return (
    <div className="NewUser">
      <h4>کاربر جدید</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>نام کاربری</Form.Label>
          <Form.Control type="text" placeholder="نام کاربری را وارد کنید" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ایمیل</Form.Label>
          <Form.Control type="email" placeholder="ایمیل را وارد کنید" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>سن</Form.Label>
          <Form.Control type="number" placeholder="سن را وارد کنید" />
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

export default NewUser;
