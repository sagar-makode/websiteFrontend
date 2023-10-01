import React, { useEffect, useMemo, useState } from "react";
import jsPDF from 'jspdf';

var pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc = "./assets/js/pdf.worker.js";


function PdfComp({ pdfUrl, fileName }) {
  const myRef = React.createRef();

  const [imageUrls, setImageUrls] = useState([]);
  const [newFile, setNewFile] = useState([]);

  const [loading, setLoading] = useState(false);
  const [isload, setisload] = useState(true);


  useEffect(() => {
    setLoading(false);
  }, [imageUrls]);

  const UrlUploader = useMemo(() => {
    return (url) => {
      fetch(url).then((response) => {
        response.blob().then((blob) => {
          let reader = new FileReader();
          reader.onload = (e) => {
            const data = atob(e.target.result.replace(/.*base64,/, ""));
            if (data) {
              renderPage(data);


            }
          };
          reader.readAsDataURL(blob);
        });
      });
    };
  }, []);



  const renderPage = async (data) => {
    setLoading(true);

    const imagesList = [];
    console.log(imagesList);
    const canvas = document.createElement("canvas");
    canvas.setAttribute("className", "canv");
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    for (let i = 1; i <= pdf.numPages; i++) {
      var page = await pdf.getPage(i);
      var viewport = page.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var render_context = {
        canvasContext: canvas.getContext("2d"),
        viewport: viewport,
      };
      await page.render(render_context).promise;
      let img = canvas.toDataURL("image/png");
      imagesList.push(img);
    }
    setImageUrls((e) => [...e, ...imagesList]);
  };
  if (isload === true) {
    UrlUploader(pdfUrl)
    setisload(false)

  }




 
  

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [imageUrls, myRef]);










  const modifyImage = async () => {
    const imagesList = []; // Create an empty array to store the modified image data URLs
  
    for (const imageUrl of imageUrls) {
      if (!imageUrl) {
        continue; // Skip empty image URLs
      }
  
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const image = new Image();
      const newWidth = 2480;
      const newHeight = 3508;
      
      image.src = imageUrl;
      canvas.width = newWidth;
      canvas.height = newHeight;
  
      await new Promise((resolve) => {
        image.onload = () => resolve();
      });
  
      context.drawImage(image, 0, 0, newWidth, newHeight);
  
      const modifiedImageData = canvas.toDataURL('image/jpeg');
      imagesList.push(modifiedImageData); // Push the modified image data URL into the array
    }
  
    // Update the state with the modified image data URLs
    setNewFile((prevUrls) => [...prevUrls, ...imagesList]);
  };
  



















  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (error) => reject(error);
    });
  };






  const pdfGenerate = async () => {
    if (newFile.length === 0) {
      return; // No images selected, exit the function
    }

    const doc = new jsPDF('p', 'pt', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginFromTop = 50; // Adjust the margin as needed

    for (let i = 0; i < newFile.length; i++) {
      try {
        const img = await loadImage(newFile[i]);

        let canvasWidth = img.width;
        let canvasHeight = img.height;

        const maxWidth = pageWidth - 20; // Adjust the width as needed
        const maxHeight = pageHeight - marginFromTop - 20; // Adjust the height as needed

        if (canvasWidth > maxWidth || canvasHeight > maxHeight) {
          const widthRatio = maxWidth / canvasWidth;
          const heightRatio = maxHeight / canvasHeight;
          const resizeRatio = Math.min(widthRatio, heightRatio);

          canvasWidth *= resizeRatio;
          canvasHeight *= resizeRatio;
        }

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        if (i > 0) {
          doc.addPage();
        }

        const posX = (pageWidth - canvas.width) / 2; // Horizontal center alignment
        const posY = marginFromTop + 10; // Add a fixed margin from the top

        doc.addImage(
          canvas.toDataURL('image/jpeg'),
          'JPEG',
          posX,
          posY,
          canvas.width,
          canvas.height
        );

        if (i === newFile.length - 1) {
          doc.save('images.pdf');
        }
      } catch (error) {
        console.error('Error loading image:', error);
      }
    }
  };



  return (


    <div className="my-4 text-center" ref={myRef} id="image-container">
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {imageUrls.length > 0 && (
            <>
              <button onClick={modifyImage}
                className="btn btn-primary mb-3">
                modify pdf
              </button>

              <button onClick={pdfGenerate}
                className="btn btn-primary mb-3">
                Download pdf
              </button>

              
            </>
          )}
        </>
      )}
      






    </div>

  );
}

export default PdfComp;
