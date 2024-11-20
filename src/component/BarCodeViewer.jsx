import axios from "axios";
import React, { useState, useRef } from "react";
import Barcode from "react-barcode";
import { toPng } from "html-to-image"; // Import html-to-image library

function BarCodeViewer() {
  const [BarcodeId, setBarcodeId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const barcodeRef = useRef(null); // Reference for the barcode element

  // Handle ID input change
  const handleIdChange = (e) => {
    setBarcodeId(e.target.value);
  };

  const fetchProduct = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Query the local json-server API
    axios
      .get(`http://localhost:3030/product?BarcodeId=${BarcodeId}`)
      .then((response) => {
        if (response.data.length > 0) {
          setProduct(response.data[0]); // Assuming one result per BarcodeId
        } else {
          setError("Product not found.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch the product.");
        setLoading(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchProduct(e);
    }
  };

  // Function to download barcode as an image
  const downloadBarcode = () => {
    if (barcodeRef.current) {
      toPng(barcodeRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `${BarcodeId}_barcode.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Error generating barcode image:", err);
        });
    }
  };

  return (
    <div className="justify-content-center">
      <div className="d-flex flex-column align-items-center gap-3 m-5">
        <h1 className="text-center my-5">BarCode Viewer</h1>
        <form
          onSubmit={fetchProduct}
          className="d-flex flex-column align-items-center gap-3"
        >
          <label htmlFor="BarcodeId">Enter Barcode ID:</label>
          <input
            type="text"
            id="BarcodeId"
            className="form-control w-75"
            value={BarcodeId}
            onChange={handleIdChange}
            onKeyDown={handleKeyPress}
            required
          />
          <button type="submit" className="btn btn-primary">
            Fetch Product
          </button>
        </form>
      </div>

      {/* Loading and Error Messages */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Product Details */}
      {product && (
        <div className="row text-center mx-3">
          {Object.keys(product).map((key) => (
            <div
              className="col-md-4 p-3 d-flex"
              key={key}
            >
              <label htmlFor={key} className="fw-bold">
                {key.replace(/([A-Z])/g, " $1")}:
              </label>
              <p>{product[key]}</p>
            </div>
          ))}
        </div>
      )}

      {/* Display Barcode */}
      {product && product.BarcodeId && (
        <div className="d-flex flex-column align-items-center my-5">
          <h3>Generated Barcode</h3>
          <div ref={barcodeRef}>
            <Barcode value={product.BarcodeId} />
          </div>
          <button className="btn btn-success mt-3" onClick={downloadBarcode}>
            Download Barcode
          </button>
        </div>
      )}
    </div>
  );
}

export default BarCodeViewer;
