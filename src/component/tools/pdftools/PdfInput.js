
import React, { useEffect, useState } from "react";

const PdfInput = ({onFileChange}) => {
  const [file, setFile] = useState(null);
 

  useEffect(() => {
    onFileChange(file);
  }, [file, onFileChange]); 
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile && newFile.type === "application/pdf") {
      setFile(newFile);
    }
  };

  return (
    <>
    

       
     <label htmlFor="fileInput" className="container border-dark bg-light my-5" style={{ borderStyle: "dashed", maxWidth: "85%", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
            //    onDragOver={handleDragOver}
            // onDrop={onChange}
            >
                <div className="text-center p-3">
                    <i className="fa fa-cloud-upload icon-color" aria-hidden="true" style={{ fontSize: "10rem" }}></i>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        accept=".pdf"
                      
                        onChange={onFileDrop}
                    />
                    <h5 className="mb-1" style={{ background: "#0099ff", color: "white", padding: "10px", borderRadius: "10px" }}>Select File</h5>
                    <p className="m-0">or Drop File Here</p>
                </div>
            </label>
    
    </>
  );
};

export default PdfInput;
