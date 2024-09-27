import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const Create = () => {
  const navigate = useNavigate();
  const [create, setCreate] = useState({
    id: "",
    name: " ",
    username: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
    company: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreate((preData) => ({
      ...preData,
      [name]: value, // username:Bala
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        'https://66f6345c436827ced97639aa.mockapi.io/api/users/',
        create
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
    navigate("/users");
  };
  return (
    <div class="container text-center mb-4">

      <form onSubmit={handleSubmit}>
        
        <div class="row">

          {/* Id */}
          <div class="col-6 col-sm-6 mb-5 ">
            <label class="form-label">ID</label>
            <input
              name="id"
              value={create.id}
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="Enter Your ID"
            />
          </div>

          {/* UserName */}
          <div class="col-6 col-sm-6">
            <label class="form-label">Username</label>
            <input
              name="username"
              value={create.username}
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="Enter Your Username"
            />
          </div>

          {/* Email */}
          <div class="col-6 col-sm-6 mb-5 ">
            <label class="form-label">Email</label>
            <input
              name="email"
              value={create.email}
              onChange={handleChange}
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
          </div>

          {/* City */}
          <div class="col-6 col-sm-6">
            <label class="form-label">City</label>
            <input
              name="city"
              value={create.city}
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="Enter Your City"
            />
          </div>

          {/* Zipcode */}
          <div class="col-6 col-sm-6 mb-5 ">
            <label class="form-label">Zip-Code</label>
            <input
              name="zipcode"
              value={create.zipcode}
              onChange={handleChange}
              type="number"
              class="form-control"
              placeholder="Enter Your Zip-Code"
            />
          </div>

          {/* Phone */}
          <div class="col-6 col-sm-6">
            <label class="form-label">Phone Number</label>
            <input
              name="phone"
              value={create.phone}
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="Enter Your Phone"
            />
          </div>

          {/* Company */}
          <div class="col-6 col-sm-6 mb-5">
            <label class="form-label">Company</label>
            <input
              name="company"
              value={create.company}
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="Enter Your Company"
            />
          </div>

          <div>
            <button className="btn btn-danger" type="submit">
            <FaUserPlus /> Create
            </button>
            </div>

        </div>
      </form>
    </div>
  );
};

export default Create;
