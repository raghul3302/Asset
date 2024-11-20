import AddProduct from "./component/AddProduct";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Depart from "./component/Depart";
// import Table from "./component/Table";
import Home from "./component/Home";
import Product from "./component/Product";
import DeptTable from "./component/DeptTable";
import BrDashboard from "./component/BrDashboard";
// import FileDownloader from "./component/FileUpload";
import FileUpload from "./component/FileUpload";
import Edit from "./component/Edit";
import BarCodeGen from "./component/BarCodeGen";
import BarCodeViewer from "./component/BarCodeViewer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Depart" element={<Depart/>}/>
          <Route path="/Dtable" element={<DeptTable/>}/>
          <Route path='/BrDashboard' element={<BrDashboard/>}/>
          <Route path="/AddProduct" element={<AddProduct/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/edit" element={<Edit />} />
          <Route path="/BarCodeGen" element={<BarCodeGen/>}/>
          <Route path="/BarCodeViewer" element={<BarCodeViewer/>}/>
          {/* <Route path="/" element={}/>
          <Route path="/" element={}/> */}
        </Routes>
      </BrowserRouter>
      {/* <Depart/> */}
      {/* <AddProduct/> */}

    </div>
  );
}

export default App;
