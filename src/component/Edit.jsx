import React, { useState } from "react";
import axios from "axios";

const Edit = () => {
  const [id, setId] = useState(""); // Store the input ID
  const [product, setProduct] = useState(null); // Store fetched product
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle ID input change
  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  // Fetch product by ID
  const fetchProduct = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:3030/product/${id}`) // Updated endpoint
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Product not found or failed to fetch.");
        setLoading(false);
      });
  };

  // Handle updates to product fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle product update
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3030/product/${id}`, product) // Updated endpoint
      .then(() => {
        alert("Product updated successfully!");
        setProduct(null); // Clear the form
        setId(""); // Reset ID input
      })
      .catch(() => {
        alert("Failed to update product.");
      });
  };

  // Handle product deletion
  const deleteProduct = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3030/product/${id}`) // Updated endpoint
        .then(() => {
          alert("Product deleted successfully!");
          setProduct(null); // Clear the form
          setId(""); // Reset ID input
        })
        .catch(() => {
          alert("Failed to delete product.");
        });
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchProduct(e); // Trigger fetchProduct on "Enter"
    }
  };
  
  return (
    <div>
      <h1 className="text-center my-5">Edit Product</h1>
      <form onSubmit={fetchProduct} className="d-flex flex-column align-items-center gap-3">
        <label htmlFor="id">Enter Product ID:</label>
        <input
          type="number"
          id="id"
          className="form-control w-25"
          value={id}
          onChange={handleIdChange}
          required
        />
        <button type="submit" className="btn btn-primary">Fetch Product</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {product && (
        
        <form onSubmit={handleSubmit} className="d-flex align-content-between flex-wrap border-top border-3 border-dark mt-5 pt-5 mx-5">
          {Object.keys(product).map((key) => {
            // Exclude 'BillCopy' field from rendering
            if (key === "BillCopy") return null;
            else if (key === "DateOfPurchase" || key === "Warranty") {
              return (
                <div className="form-group col-12 col-md-6 col-lg-4 p-2" key={key}>
                  <label htmlFor={key}>
                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}:
                  </label>
                  <input
                    type="date"
                    id={key}
                    name={key}
                    className="form-control"
                    value={product[key] || ""}
                    onChange={handleChange}
                  />
                </div>
              );
            }
            return (
              <div className="form-group col-12 col-md-6 col-lg-4 p-2" key={key}>
                <label htmlFor={key}>
                  {key.replace(/([A-Z])/g, " $1").toUpperCase()}:
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  className="form-control"
                  value={product[key] || ""}
                  onChange={handleChange}
                />
              </div>
            );
          })}

        <div className="m-4 p-2">  <button type="submit" className=" me-4  text-center btn btn-success">
            Save Changes
          </button>
          <button onClick={deleteProduct} className=" ms-4 text-center btn btn-danger">
          Delete Product
        </button></div>
        </form>
      )}


    </div>
  );
};

export default Edit;
