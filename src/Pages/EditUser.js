import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditUser() {
  const [userList, setUserList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newImg, setNewImg] = useState("");

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

  let params = useParams();

  let targetUser = userList.find((user) => {
    return user[0] === params.userId;
  });

  console.log(targetUser);

  const newNameHandler = (e) => {
    setNewName((prevState) => {
      return (prevState = e.target.value);
    });
  };

  const newEmailHandler = (e) => {
    setNewEmail((prevState) => {
      return (prevState = e.target.value);
    });
  };

  const newAgeHandler = (e) => {
    setNewAge((prevState) => {
      return (prevState = e.target.value);
    });
  };

  const newImgSrcHandler = (e) => {
    setNewImg((prevState) => {
      return (prevState = e.target.value);
    });
  };

  async function editUserHandler(e) {
    e.preventDefault();

    let updatedUser = {
      id: targetUser[1].id,
      name: newName,
      age: newAge,
      email: newEmail,
      img: newImg,
    };

    await fetch(
      `https://farsicmsdb-25ad0-default-rtdb.firebaseio.com/users/${params.userId}.json`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err = new Error("cant edit this object");
        console.error(err);
      })
      .finally(() => {
        console.log("done");
      });
  }

  return (
    <div>
      {targetUser !== undefined ? (
        <>
          <h3>{targetUser[1].name}</h3>
          <img src={targetUser[1].img} alt="" />
          <Form onSubmit={editUserHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>نام کاربری</Form.Label>
              <Form.Control
                type="text"
                placeholder="نام کاربری جدید را وارد کنید"
                onChange={newNameHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ایمیل</Form.Label>
              <Form.Control
                type="email"
                placeholder="ایمیل جدید را وارد کنید"
                onChange={newEmailHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>سن</Form.Label>
              <Form.Control
                type="number"
                onChange={newAgeHandler}
                placeholder="سن جدید را وارد کنید"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>آدرس عکس</Form.Label>
              <Form.Control
                type="text"
                placeholder="آدرس عکس جدید را وارد کنید"
                onChange={newImgSrcHandler}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              بروزرسانی
            </Button>
          </Form>
        </>
      ) : null}
    </div>
  );
}

export default EditUser;
