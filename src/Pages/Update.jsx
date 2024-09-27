import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Update = ({ id }) => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://66f6345c436827ced97639aa.mockapi.io/api/users/${id}`)
      .then((res) => setEdit(res.data))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((preData) => ({
      ...preData,
      [name]: value, // username:ivy
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://66f6345c436827ced97639aa.mockapi.io/api/users/${id}`, edit)
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
              value={edit.id}
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
              value={edit.username}
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
              value={edit.email}
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
              value={edit.city}
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
              value={edit.zipcode}
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="Enter Your Zip-Code"
            />
          </div>

          {/* Phone */}
          <div class="col-6 col-sm-6">
            <label class="form-label">Phone Number</label>
            <input
              name="phone"
              value={edit.phone}
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
              value={edit.company}
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="Enter Your Company"
            />
          </div>

          <div>
            <button className="btn btn-success" type="submit">
              <FaUserEdit /> Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
