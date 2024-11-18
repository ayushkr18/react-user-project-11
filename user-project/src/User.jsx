import { useState } from "react";
import axios from "axios";

function User() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [users, setUsers] = useState([]);

  //   function inputFirstName(e) {
  //     firstName = e.target.value;
  //     setFirstName(firstName);
  //   }

  //   function inputLastName(e) {
  //     lastName = e.target.value;
  //     setLastName(lastName);
  //   }

  //   function inputEmail(e) {
  //     email = e.target.value;
  //     setEmail(email);
  //   }

  //   function inputPssword(e) {
  //     password = e.target.value;
  //     setPassword(password);
  //   }

  function submitData() {
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
        users = res.data.users; // receive the users
        setUsers(users); // supply the users in setUsers
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
          <td>First Name </td>
          <td>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Last Name </td>
          <td>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Email </td>
          <td>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Password: </td>
          <td>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <button onClick={submitData}>Submit Data</button>
        </tr>
      </table>

      {/* show database table in dom(webpage) */}
      <table border="1">
        <tr>
          <th>First Name: </th>
          <th>Last Name: </th>
          <th>Email: </th>
          {/* <th>Password: </th> */}
        </tr>
        {users.map(
          (user, i) => (
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ) // i means index 0,1,2-----
        )}
      </table>
    </div>
  );
}
export default User;
