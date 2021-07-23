import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Login() {
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
        title: formObject.username,
        author: formObject.password
      })
        .then(() => setFormObject({
          title: "",
          author: "",
          synopsis: ""
        }))
        .then(() => loadMembers())
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <form>
        <label>Username</label>
        <input label="username"></input>
        <label>Password</label>
        <input></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
