import React, { useState } from "react";

function FileUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleFileChange} 
      />
      <p>{fileName ? `Selected file: ${fileName}` : "No file selected"}</p>
    </div>
  );
}

export default FileUpload;