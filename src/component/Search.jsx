import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {
    const [selectedType, setSelectedType] = useState('');

    const handleSelectChange = (event) => {
      setSelectedType(event.target.value);
    };
  
    const renderForm = () => {
      switch (selectedType) {
        case 'dept':
          return (
            <div className="my-5">
              {/* <label className="fs-5 pe-2">Department</label>
              <input
                type="text"
                name="Department"
                id="Department"
                className="px-2"
                placeholder="Enter the value here"
              /> */}
              <div className="d-flex text-center justify-content-center">
              <Link
                  to={{
                    pathname: '/Product',
                    state: { selectedType }, 
                  }}
                  className='text-decoration-none text-white'
                >
                <button type="submit" className="btn btn-outline-primary mt-4 mx-4 px-4"> 
                  View
                </button>
                </Link>
              </div>
            </div>
          );
        case 'prt':
          return (
            <div className="my-5">
              {/* <label className="fs-5 pe-2">Product </label>
              <input
                type="text"
                name="Product"
                id="Product"
                className="px-2"
                placeholder="Enter the value here"
              /> */}
              <div className="d-flex text-center justify-content-center">
                  
              <Link
                  to={{
                    pathname: '/Product',
                    state: { selectedType }, 
                  }}
                  className='text-decoration-none text-white'
                >
                <button type="submit" className="btn btn-outline-primary mt-4 mx-4 px-4">
                
                  View
                </button>
                </Link>
              </div>
            </div>
          );
        case 'user':
          return (
            <div className="my-5">
              {/* <label className="fs-5 pe-5">User</label>
              <input
                type="text"
                name="User"
                id="User"
                className="px-2"
                placeholder="Enter the value here"
              /> */}
              <div className="d-flex text-center justify-content-center">
              <Link
                  to={{
                    pathname: '/Product',
                    state: { selectedType }, 
                  }}
                  className='text-decoration-none text-white'
                >
                <button type="submit" className="btn btn-outline-primary mt-4 mx-4 px-4">
                  View
                </button>
                </Link>
              </div>
            </div>
          );
          case 'Barcodegen':
            return (
                <div className="d-flex text-center justify-content-center">
                <Link
                    to={{
                      pathname: '/BarCodeGen',
                      state: { selectedType }, 
                    }}
                    className='text-decoration-none text-white'
                  >
                  <button type="submit" className="btn btn-outline-primary mt-4 mx-4 px-4">
                    GoTo
                  </button>
                  </Link>
                </div>
              
            );
            case 'Barcodeview':
              return (
                <div className="d-flex text-center justify-content-center">
                <Link
                    to={{
                      pathname: '/BarCodeViewer',
                      state: { selectedType }, 
                    }}
                    className='text-decoration-none text-white'
                  >
                  <button type="submit" className="btn btn-outline-primary mt-4 mx-4 px-4">
                    GoTo
                  </button>
                  </Link>
                </div>
              );
        default:
          return null;
      }
    };
  return (
    <div className="d-flex justify-content-center my-5">
    <div className="text-center">
      <label className="form-label">
        <h3><u>View</u></h3>
      </label>
      <select
        className="form-select form-select-lg w-100"
        onChange={handleSelectChange}
        value={selectedType}
      >
        <option value="">Select Search Type</option>
        <option value="dept">Department</option>
        <option value="prt">Product</option>
        <option value="user">User</option>
        <option value="Barcodegen">Bar Code Generator</option>
        <option value="Barcodeview">Bar Code Viewer</option>
      </select>

      {renderForm()}
    </div>
  </div>
  )
}

export default Search