import React, { useState } from 'react';

const AddProduct = () => {    
  // Initialize the form data object with default values
  const [data, setdata] = useState({
    id: null,
    ProductName: "",
    AssetName: "",
    ipAddress: "",
    Department: "",
    UserName: "",
    Location: "",
    Brand: "",
    ProductType: "",
    SerialNumber: "",
    Config: "",
    os: "",
    Services: "",
    VendorName: "",
    DateOfPurchase: "",
    LastServices: "",
    BarcodeId: "",
    Warranty: "",
    WarrantyStatus: "",
    BillCopy: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:3030/product", {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(data)
  //   }).then((res) => {
  //     alert("Product Added Successfully.");
  //   }).catch((err) => {
  //     alert("Product Added Unsuccessfully: " + err.message);
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3030/product", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then((res) => {
      alert("Product Added Successfully.");
      // Do not reset data, keep the form fields filled
    })
    .catch((err) => {
      alert("Product Added Unsuccessfully: " + err.message);
    });
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setdata(prevData => ({
      ...prevData,
      BillCopy: file ? file.name : null // store the file name (or file object if needed)
    }));
  };

  return (
    <div className="container mt-4">
      <h2>Asset Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-wrap">
          {Object.keys(data).map((key) => (
            key !== "BillCopy" ? (
              <div className="form-group col-12 col-md-6 col-lg-4 p-2" key={key}>
                <label htmlFor={key}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  className="form-control"
                  value={data[key]}
                  onChange={handleChange}
                  placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`}
                />
              </div>
            ) : (
              <div className="form-group col-12 col-md-6 col-lg-4 p-2" key={key}>
                <label htmlFor={key}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="file"
                  id={key}
                  name={key}
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>
            )
          ))}
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
