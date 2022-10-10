import React, { useState } from "react";

export default function Form(){
  const [user,setUser] = useState({
    name : "",
    username : "",
    email: "",

  })
  const{name,username,email} = user;//deconstruct
  const onInputChange = (e) => {
    console.log("1 ",e.target.value)
  }
  const handlerInput = (e) => {
    console.log("2 ", e.target.value)
  }
  return(
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow text-center">
        <h2 className=" m-4">Register User</h2>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">Name</label>
          <input type={"text"} className="form-control" placeholder="Enter your name" name="name" value={name} onChange={(e) => onInputChange(e)}/> {/*function inline */}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type={"text"} className="form-control" placeholder="Enter your user-name" name="username" value={username} onChange={handlerInput}/> {/*function separated*/}
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email</label>
          <input type={"text"} className="form-control" placeholder="Enter your Email address" name="email" value={email}/>
        </div>
        <button type="submit" className="btn btn-outline-primary" >Submit</button>
        <button type="submit" className="btn btn-outline-danger mx-2" >Cancel</button>
      </div>

    </div>
  </div>
  )
}