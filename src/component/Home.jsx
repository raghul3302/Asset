import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };


  return (
    <div>
      <header className="d-flex justify-content-center mt-5">
        <h1 className="">ASSETS MANAGEMENT</h1>
      </header>
      <main className="mx-5 my-5">
        <div className="row mx-5 my-5">
          <a href=""></a>
          <div className="col text-center">
            <Link to="/Depart" 
            state={{branch:"HEAD OFFICE"}}
            className="text-decoration-none text-dark">
              <button
                type="submit"
                value="ho"
                className="btn btn-outline-dark fs-4 border-2 px-3 w-75 py-4"
              >
                HEAD OFFICE
              </button>
            </Link>
          </div>
          <div className="col text-center">
            <Link to="/Depart"
             state={{ branch: "CROMPET" }} 
              className="text-decoration-none text-dark">
              <button
                type="submit"
                id="branch"
                value="cpt"
                onChange={handleSelectChange}
                className="btn btn-outline-dark fs-4 border-2 px-3 w-75 py-4"
              >
                CROMPET
              </button>
            </Link>
          </div>
          <div className="col text-center">
            <Link to="/Depart"
            state={{ branch: "COIMBATORE" }} 
              className="text-decoration-none text-dark"
            >
              <button
                type="submit"
                value="cbe"
                className="btn btn-outline-dark fs-4 border-2 px-3 w-75 py-4"
              >
                COIMBATORE
              </button>
            </Link>
          </div>
        </div>
        <div className="row mx-5 my-5">
          <div className="col text-center">
            <Link to="/Depart"
             state={{ branch:"THIRUNALVELI" }} 
              className="text-decoration-none text-dark">
              <button
                type="submit"
                value="tni"
                className="btn btn-outline-dark fs-4 border-2 px-3 w-75 py-4"
              >
                THIRUNALVELI
              </button>
            </Link>
          </div>
          <div className="col text-center">
            <Link to="/Depart"
             state={{ branch:"TRICHY" }} 
              className="text-decoration-none text-dark">
              <button
                type="submit"
                value="try"
                className="btn btn-outline-dark fs-4 border-2 px-3 w-75 py-4"
              >
                TRICHY
              </button>
            </Link>
          </div>
          <div className="col text-center">
            <Link
              to="/Depart"
              state={{ branch:"TIRUVANDRAM" }}
              className="text-decoration-none text-dark"
            >
              <button
                type="button"
                className="btn btn-outline-dark fs-4 border-2 px-3 w-75 py-4"
              >
                TIRUVANDRAM
              </button>
            </Link>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
