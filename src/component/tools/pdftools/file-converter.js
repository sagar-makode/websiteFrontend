import React, { useEffect, useMemo, useState } from "react";
var pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc = "./assets/js/pdf.worker.js";

function FileConverter({ pdfUrl, fileName }) {
  const myRef = React.createRef();

  const [imageUrls, setImageUrls] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [modalImageUrl, setModalImageUrl] = useState(null);
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
    setNumOfPages((e) => e + pdf.numPages);
    setImageUrls((e) => [...e, ...imagesList]);
  };
  if (isload=== true) {
    UrlUploader(pdfUrl)
    setisload(false)
    
  }
  



  const downloadImage = async (url, index) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName.replace(".pdf", "")}_${index + 1}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const openModal = (url) => {
    setModalImageUrl(url);
  };

  const closeModal = () => {
    setModalImageUrl(null);
  };

  const downloadAllImages = async () => {
    for (let index = 0; index < imageUrls.length; index++) {
      await downloadImage(imageUrls[index], index);
    }
  };

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [imageUrls, myRef]);

  return (
    <>
    
      <div className="my-4 text-center" ref={myRef} id="image-container">
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            {imageUrls.length > 0 && (
              <>
                <h4 className="drop-file-preview__title">
                  Converted Images - {numOfPages}
                </h4>
                <button
                  onClick={downloadAllImages}
                  className="btn btn-primary mb-3"
                >
                  Download All Images
                </button>

                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-3  row-cols-md-2 g-3">
                  {imageUrls.map((url, index) => (

                    <div key={index} className="col">
                      <div
                        className="img-card position-relative"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <img
                          src={url}
                          alt={`Page ${index + 1}`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div
                          className="position-absolute top-0 end-0 p-2"
                          style={{ zIndex: 1 }}
                        >
                          <button style={{ position: "relative" }}
                            onClick={() => openModal(url)}
                            className="btn btn-primary btn-bg me-2"
                          >
                            <i className="fa fa-eye" aria-hidden="true"></i>
                          </button>
                          <button
                            onClick={() => downloadImage(url, index)}
                            className="btn btn-primary btn-bg"
                          >
                            <i className="fa fa-download" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
        {modalImageUrl && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Image Preview</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img src={modalImageUrl} alt="Preview" style={{ maxWidth: "100%" }} />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <a
                    href={modalImageUrl}
                    download={`${fileName.replace(".pdf", "")}.png`}
                    className="btn btn-primary"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}






      </div>
    </>



  );
}

export default FileConverter;
