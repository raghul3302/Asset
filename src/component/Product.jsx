import React, { useEffect, useState } from "react";

const Product = () => {
    const[product,setproduct]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3030/product')
        .then(det=>det.json())
        .then(det=>setproduct(det))

    },[])

  return (
    <div className="mt-5">
      <h1 className="text-center">Product Table</h1>
    <div class="table-responsive mt-4 text-center">
      <table class="table table-hover">
        <thead className="text-center">
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Asset Name</th>
          <th scope="col">Ip Address</th>
          <th scope="col">Department</th>
          <th scope="col">User Name</th>
          <th scope="col">Location</th>
          <th scope="col">Brand</th>
          <th scope="col">Product Type</th>
          <th scope="col">Serial Number</th>
          <th scope="col">Config</th>
          <th scope="col">OS</th>
          <th scope="col">Policy</th>
          <th scope="col">Vendor Name</th>
          <th scope="col">Date Of Purchase</th>
          <th scope="col">Bill Copy</th>
          <th scope="col">Last Servies</th>
          <th scope="col">Barcode Id</th>
          <th scope="col">Warranty</th>
          <th scope="col">Warranty Status</th>
          <th scope="col">Remark</th>
        </thead>
        <tbody>
          {product.map((pro)  => (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.ProductName}</td>
              <td>{pro.AssetName}</td>
              <td>{pro.ipAddress}</td>
              <td>{pro.Department}</td>
              <td>{pro.UserName}</td>
              <td>{pro.Location}</td>
              <td>{pro.Brand}</td>
              <td>{pro.ProductType}</td>
              <td>{pro.SerialNumber}</td>
              <td>{pro.Config}</td>
              <td>{pro.os}</td>
              <td>{pro.Policy}</td>
              <td>{pro.VendorName}</td>
              <td>{pro.DateOfPurchase}</td>
              <td>{pro.BillCopy}</td>
              <td>{pro.LastServices}</td>
              <td>{pro.BarcodeId}</td>
              <td>{pro.Warranty}</td>
              <td>{pro.WarrantyStatus}</td>
              <td>{pro.Remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Product;
