import React from "react";
import Container from "@material-ui/core/Container";

function Login(){
    return(
        <div>
      <Container maxWidth="sm">
        <form style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <label>Username</label>
        <input
        //   onChange={handleInputChange}
        //   name="username"
        //   placeholder="Username (required)"
        //   value={formObject.username}
        ></input>
        <label>Password</label>
        <input
        //   onChange={handleInputChange}
        //   name="password"
        //   placeholder="Password (required)"
        //   value={formObject.password}
        ></input>
        <button
        // disabled={!(formObject.username && formObject.password)}
        // onClick={handleFormSubmit}
        >Submit</button>
        </form>
      </Container>
    </div>
    )
}

export default Login;