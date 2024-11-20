import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {    
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
    Policy: "",
    VendorName: "",
    DateOfPurchase: "",
    LastServices: "",
    BarcodeId: "",
    Warranty: "",
    WarrantyStatus: "",
    BillCopy: ""  // Ensure this is an empty string, not null or undefined
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata(prevData => ({
      ...prevData,
      [name]: value || "" // Ensure value is never undefined
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3030/product", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then((res) => {
      alert("Product Added Successfully.");
      setdata({
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
        BillCopy: ""  // Resetting to an empty string, not undefined
      });
    })
    .catch((err) => {
      alert("Product Added Unsuccessfully: " + err.message);
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setdata(prevData => ({
      ...prevData,
      BillCopy: file ? file.name : ""  // Store file name, not undefined
    }));
  };



// const handleFileChange = async (event) => {
//   const file = event.target.files[0];  // Get the selected file
//   if (file) {
//     // Create a FormData object to send the file in a POST request
//     const formData = new FormData();
//     formData.append('file', file);  // 'file' is the key used in backend

//     try {
//       // Send the file to the server (replace the URL with your backend endpoint)
//       const response = await axios.post('/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Assuming the response contains a file URL or path, you can update the state
//       setdata(prevData => ({
//         ...prevData,
//         BillCopy: response.data.filePath,  // Store the file path or URL
//       }));

//       console.log('File uploaded successfully:', response.data);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   }
// };


  return (
    <div className="container mt-4">
      <h2>Asset Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-wrap">
          {Object.keys(data).map((key) => {
            // Ensure inputs are controlled (with value or placeholder set)
            if (key === "BillCopy") {
              return (
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
              );
            } else if (key === "DateOfPurchase" || key === "Warranty") {
              return (
                <div className="form-group col-12 col-md-6 col-lg-4 p-2" key={key}>
                  <label htmlFor={key}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type="date"
                    id={key}
                    name={key}
                    className="form-control"
                    value={data[key] || ""}  // Ensure value is never undefined
                    onChange={handleChange}
                    placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`}
                  />
                </div>
              );
            } else {
              return (
                <div className="form-group col-12 col-md-6 col-lg-4 p-2" key={key}>
                  <label htmlFor={key}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    className="form-control"
                    value={data[key] || ""}  // Ensure value is never undefined
                    onChange={handleChange}
                    placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`}
                  />
                </div>
              );
            }
          })}
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
