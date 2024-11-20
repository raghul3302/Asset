import React, { useEffect, useState } from "react";

const BrDashboard = () => {


    const [data, setdata] = useState([])
    
    useEffect(()=>{
      fetch('http://localhost:3030/summary')
      .then(det=>det.json())
      .then(det=>setdata(det))

  },[])
    

  return (
    <div>
      <header className="d-flex justify-content-center my-5">
            <h1 className="">Dashboard</h1>
        </header>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Department</th>
            <th scope="col">System Count</th>
            <th scope="col">Laptop Count</th>
            <th scope="col">TAB Count</th>
            <th scope="col">Server Count</th>
            <th scope="col">Laser Printer Count</th>
            <th scope="col">Barcode scanner Count</th>
            <th scope="col">Barcode Printer Count</th>
            <th scope="col">Flatbed Scanner Count</th>
            <th scope="col">Passbook Printer Count</th>
            <th scope="col">Receipt Printer Count</th>
            <th scope="col">Network Printer Count</th>
            <th scope="col"> Location</th>
          </tr>
        </thead>
        <tbody>


        {data.length>0?
            (data.map((data)=>(
                                <tr key={data.id}>
                                  <td>{data.id}</td>
                                <td>{data.depart}</td>
                                <td>{data.sysc}</td>
                                <td>{data.lapc}</td>
                                <td>{data.serc}</td>
                                <td>{data.lpc}</td>
                                <td>{data.tabc}</td>
                                <td>{data.bsc}</td>
                                <td>{data.bpc}</td>
                                <td>{data.fsc}</td>
                                <td>{data.ppc}</td>
                                <td>{data.rpc}</td>
                                <td>{data.npc}</td>
                                <td>{data.loc}</td>
                                </tr>
            ))):(
                <tr>
                    <td colSpan={14} className="text-center">No User</td>
                </tr>
            )}


        </tbody>
      </table>
    </div>
  );
};

export default BrDashboard;
