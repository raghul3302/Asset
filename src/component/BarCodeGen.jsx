import React, { useState } from 'react'; 
import axios from 'axios'; // Import axios for API requests
import Barcode from 'react-barcode'; // Import Barcode component

function BarCodeGen() {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchProduct(e); // Trigger fetchProduct on "Enter"
    }
  };

  return (
    <div>
      <h1 className="text-center my-5">Bar Code Generator</h1>
      <form onSubmit={fetchProduct} className="d-flex flex-column align-items-center gap-3">
        <label htmlFor="id">Enter Product ID:</label>
        <input
          type="number"
          id="id"
          className="form-control w-25"
          value={id}
          onChange={handleIdChange}
          onKeyDown={handleKeyPress} // Handle Enter key press
          required
        />
        <button type="submit" className="btn btn-primary">Fetch Product</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {product && (
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3">
          {Object.keys(product).map((key) => {
            if (key === "BarcodeId") {
              return (
                <div className="form-group col-12 col-md-6 col-lg-4 p-2 gap-4 d-flex flex-column text-center align-items-center border-top border-3 border-dark mt-4" key={key}>
                  <label htmlFor={key} className='fs-4'>Barcode</label>
                  {/* Render the Barcode component */}
                  <input
                    type="text"
                    id={key}
                    name={key}
                    className="form-control"
                    value={product[key] || ""}
                    onChange={handleChange}
                  />
                            <div className="d-flex gap-3 mt-4">
            <button type="submit" className="btn btn-success">Save Changes</button>
          </div>
                   <Barcode value={product[key]} />
                </div>
                
              );
            }
            return null; 
          })}


        </form>
      )}
    </div>
  );
}

export default BarCodeGen;
