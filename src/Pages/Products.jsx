import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Products = ({ setId }) => {
  const [user, setUser] = useState([]);
  const [del, setDel] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, [del]);
  const fetchdata = async () => {
    await axios
      .get("https://66f6345c436827ced97639aa.mockapi.io/api/users")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  };

  // Products Edit Function :

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  // Products Delete Function :

  const handleDel = async (id) => {
    await axios
      .delete(`https://66f6345c436827ced97639aa.mockapi.io/api/users/${id}`)
      .then((res) => setDel(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-3">
      <button
        className="btn btn-danger mb-4"
        onClick={() => navigate("/create")}
      >
        <FaUserPlus /> Create
      </button>
      <table class="table text-center table-bordered border-dark ">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Zipcode</th>
            <th scope="col">Phone</th>
            <th scope="col">Company</th>
            <th scope="col" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map((ele, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ele.id}</th>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.city}</td>
                <td>{ele.zipcode}</td>
                <td>{ele.phone}</td>
                <td>{ele.company}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleEdit(ele.id);
                    }}
                  >
                    <FaRegEdit />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDel(ele.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
