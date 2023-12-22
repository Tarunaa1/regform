import React from "react";
import { useState } from "react";



export default function Body() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);

  const onButtonClickHandler = () => {
    if (Name.length && email.length && password.length) {
    setState(!state);}
  };

  const styles={
    form : {
    width: "75%",
    height: "300px",
    backgroundColor: "lightgray",
    position: "relative",
    left: "15%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
    boxes :{
    width: "75%",
    backgroundColor: "white",
    height: "50px",
    marginTop: "20px",
    borderColor: "gray",
    alignSelf: "center",
    border: "none",
  },
  btn : {
    backgroundColor: "#58a35e",
    width: "250px",
    height: "45px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    color: "white",
    alignSelf: "center",
    fontSize: "19px",
  },
   text : {
    backgroundColor: "lightgray",
    margin: "5px",
    color: " green",
    fontSize: "18px",
  }
  }
  return (
    <div>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        >
        <input
          type="text"
          placeholder="Enter your Name"
          style={styles.boxes}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your Email"
          style={styles.boxes}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          style={styles.boxes}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {state && (<p style={styles.text}> Hi {Name}, Your response has been submitted</p>)}
        <button type="submit" style={styles.btn} onClick={onButtonClickHandler}>
          Register
        </button>
      </form>
    </div>
  );
}
