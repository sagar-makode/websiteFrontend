import React, { useState } from 'react'
import PdfInput from './pdftools/PdfInput'
import FileConverter from './pdftools/file-converter';

function PdfToImg() {

const [pdfFile, setPdfFile] = useState(null);
console.log(pdfFile);

  return (
    <>
    <div item="true"className="box">
    <PdfInput onFileChange={(file) => setPdfFile(file)} />
</div>

    
    
    
    
    <div container="true" sx={{ py: 16, px: 2 }}>

                    {pdfFile && (
                        <div item="true" sx={{ width: "100%" }}>
                            <FileConverter
                                pdfUrl={URL.createObjectURL(pdfFile)}
                                fileName={pdfFile.name}
                            />
                        </div>
                    )}
                </div>
    </>
    

  )
}

export default PdfToImg