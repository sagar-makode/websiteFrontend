import React, { useState } from 'react'
import PdfInput from './pdftools/PdfInput'
import PdfComp from './pdftools/pdfcomp';

function PdfCompressor() {


  const [pdfFile, setPdfFile] = useState(null);
  console.log(pdfFile);
  return (
    <div>
      <div item="true" className="box">
        <PdfInput onFileChange={(file) => setPdfFile(file)} />
      </div>

      <div container="true" sx={{ py: 16, px: 2 }}>

{pdfFile && (
    <div item="true" sx={{ width: "100%" }}>
        <PdfComp
            pdfUrl={URL.createObjectURL(pdfFile)}
            fileName={pdfFile.name}
        />
    </div>
)}
</div>
    </div>
  )
}

export default PdfCompressor