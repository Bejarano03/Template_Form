import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Container from "@material-ui/core/Container";


function Signup() {
  // Components initial state
  const [members, setMembers] = useState([]);
  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
  });

  // Loads all members and sets them setMembers
  useEffect(() => {
    loadMembers();
  }, []);

  // Loads all members and sets them to members
  function loadMembers() {
    API.getMembers()
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }

  // Handling Input
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  //   Handling Submit
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      API.saveMember({
        username: formObject.username,
        password: formObject.password,
      })
        .then(() =>
          setFormObject({
            username: "",
            password: "",
          })
        )
        .then(() => loadMembers())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <Container maxWidth="sm">
        <form style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <label>Username</label>
        <input
          onChange={handleInputChange}
          name="username"
          placeholder="Username (required)"
          value={formObject.username}
        ></input>
        <label>Password</label>
        <input
          onChange={handleInputChange}
          name="password"
          placeholder="Password (required)"
          value={formObject.password}
        ></input>
        <button
        disabled={!(formObject.username && formObject.password)}
        onClick={handleFormSubmit}
        >Submit</button>
        </form>
      </Container>
    </div>
  );
}

export default Signup;
