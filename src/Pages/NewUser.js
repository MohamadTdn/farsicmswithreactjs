import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const userNameHandler = (e) => {
    setName((prevName) => {
      return (prevName = e.target.value);
    });
  };

  const userEmailHandler = (e) => {
    setEmail((prevEmail) => {
      return (prevEmail = e.target.value);
    });
  };

  const userAgeHandler = (e) => {
    setAge((prevAge) => {
      return (prevAge = e.target.value);
    });
  };

  const userImageHandler = (e) => {
    setImgSrc((prevImg) => {
      return (prevImg = e.target.value);
    });
  };

  async function addUserHandler (e) {
    e.preventDefault();

    let newUser = {
      id: Math.random() * 10000,
      name: name,
      age: age,
      email: email,
      img: imgSrc,
    };

    await fetch("https://farsicmsdb-25ad0-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        console.log(res);
        makeInputEmpty()
      })
      .catch((err) => {
        err = new Error("cant post this object");
        console.error(err)
      })
      .finally(() => {
        console.log("done");
      });
  };

  const makeInputEmpty = () => {
    setName((prevName) => {
      return (prevName = "");
    });
    setEmail((prevEmail) => {
      return (prevEmail = "");
    });
    setAge((prevAge) => {
      return (prevAge = "");
    });
    setImgSrc((prevImg) => {
      return (prevImg = "");
    });
  }

  return (
    <div className="NewUser">
      <h4>کاربر جدید</h4>
      <Form onSubmit={addUserHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>نام کاربری</Form.Label>
          <Form.Control
            onChange={userNameHandler}
            type="text"
            placeholder="نام کاربری را وارد کنید"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ایمیل</Form.Label>
          <Form.Control
            type="email"
            onChange={userEmailHandler}
            placeholder="ایمیل را وارد کنید"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>سن</Form.Label>
          <Form.Control
            type="number"
            onChange={userAgeHandler}
            placeholder="سن را وارد کنید"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>آدرس عکس</Form.Label>
          <Form.Control
            onChange={userImageHandler}
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

export default NewUser;
