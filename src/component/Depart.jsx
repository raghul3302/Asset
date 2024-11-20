import React, { useState } from 'react';

import BrDashboard from './BrDashboard';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Depart = () => {

  let [id, setid] = useState('')
  const { state } = useLocation();
  const { branch } = state || Error; 

  return (
    <>
      <header className="d-flex justify-content-center mt-5">
        <h1>{branch} BRANCH</h1>
      </header>
      <main className='d-flex justify-content-center'>
        <div>
        <div className=" mb-4 px-4  text-center">
            <BrDashboard branch={branch}/>
        </div>



    <div className="d-flex justify-content-around my-5">
    <div className="mb-3 text-center border border-dark border-2 rounded-5 p-5">
    <div className='d-flex'>
          <div className='flex-grow-1  px-5'><Search/></div>
          <div className='mt-5'>
            <h3><u>Alter & Add</u></h3>
          <div className='m-5 d-flex my-auto justify-content-center'>
            <Link to="/AddProduct" className="btn btn-outline-success mt-4 mx-4 px-5 py-2 fs-5">Add</Link>
            <Link to={{
              pathname:'/Edit',
              state: { id }, 
            }} className="btn btn-outline-danger mt-4 mx-4 px-5 py-2 fs-5">Edit</Link>
          </div>
          <Link to="/BarCodeGen" className='btn btn-outline-danger mt-4 mx-4 px-5 py-2 fs-5'>BarCode Generator</Link>
          </div>
        </div>
    </div>
  </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Depart;
