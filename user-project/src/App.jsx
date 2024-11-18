import { useState } from "react";
import axios from "axios";

function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [users, setUsers] =  useState([]);

  function submitData() {
    firstName = document.getElementById("firstName").value;
    setFirstName(firstName);

    lastName = document.getElementById("lastName").value;
    setLastName(lastName);

    email = document.getElementById("email").value;
    setEmail(email);

    password = document.getElementById("password").value;
    setPassword(password);

    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    axios({
      url: "http://localhost:3000/add/user",
      method: "post",
      data: data,
    })
      .then((res) => {
        console.log(res.data.success, "data");
        console.log(res.data.message, "message");
        users=res.data.users; // receive the users
        setUsers(users) // supply the users in setUsers
        if (res.data.success) {
          alert("Data saved successfully....");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("something sent wrong....");
      });
  }
  return (
    <div>
      <h1> Sign Up </h1>
      <table>
        <tr>
          <td>First Name: </td>
          <td>
            <input type="text" id="firstName" />
          </td>
        </tr>
        <tr>
          <td>Last Name: </td>
          <td>
            <input type="text" id="lastName" />
          </td>
        </tr>
        <tr>
          <td>Email : </td>
          <td>
            <input type="email" id="email" />
          </td>
        </tr>
        <tr>
          <td>Password: </td>
          <td>
            <input type="password" id="password" />
          </td>
        </tr>
        <tr>
          <button onClick={submitData}>Submit Data</button>
        </tr>
      </table>

      <table border="1">
        <tr>
          <th>First Name: </th>
          <th>Last Name: </th>
          <th>Email: </th>
          {/* <th>Password: </th> */}
        </tr>
        {
          users.map((user,i)=> 
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr> // i means index 0,1,2-----

          )
        }
      </table>
    </div>
  );
}

export default App;
