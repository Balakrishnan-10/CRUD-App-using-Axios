import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://66f6345c436827ced97639aa.mockapi.io/api/users")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="container mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/*  The given API products are mapping and using cards: */}

        {products.map((element, index) => {
          return (
            <div key={index}>
              <div className="col border border-dark rounded-2 h-100">
                <div className="card">
                  <div class="card-header text-bg-primary">
                    {element.id}. {element.name}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-danger">
                      Username : {element.username}
                    </h5>
                    <h5 className="card-title text-danger">
                      Email : {element.email}
                    </h5>
                    <p className="card-text"> Street : {element.street}</p>
                    <p className="card-text"> City : {element.city}</p>
                    <p className="card-text"> Zipcode : {element.zipcode}</p>
                    <p className="card-text"> Phone : {element.phone}</p>
                    <p className="card-text"> Company : {element.company}</p>
                  </div>
                  <div className="card-footer">
                    <p className="card-text">
                      {" "}
                      Website :
                      <span className="text-primary">
                        {" "}
                        {element.website}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
