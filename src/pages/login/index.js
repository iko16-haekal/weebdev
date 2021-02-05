import Axios from "axios"
import React from "react"
import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handlesubmit = () => {
    console.log(email + " " + password)
    Axios.post("https://weebdev.webcanggih.com/login", {
      email: email,
      password: password,
    })
      .then(res => {
        console.log(res.data.data)
        localStorage.setItem("token", res.data.data.Authorization)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="container my-5 pt-5">
        <div className="row justify-content-center">
          <div className="col">
            <div className="form-group">
              <label>Email address</label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button onClick={handlesubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
