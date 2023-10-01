import jsPDF from 'jspdf';
import { React, useState } from 'react';

function ImageToPdf() {
    const [photos, setPhotos] = useState([]);


    const onChangephoto = (e) => {
        const files = Array.from(e.target.files);
        setPhotos(files);
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
        if (photos.length === 0) {
            return; // No images selected, exit the function
        }

        const doc = new jsPDF('p', 'pt', 'a4');
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const marginFromTop = 50; // Adjust the margin as needed

        for (let i = 0; i < photos.length; i++) {
            try {
                const img = await loadImage(URL.createObjectURL(photos[i]));

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

                if (i === photos.length - 1) {
                    doc.save('images.pdf');
                }
            } catch (error) {
                console.error('Error loading image:', error);
            }
        }
    };
    console.log(photos);







    return (
        <div>
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
                        accept="image/png, image/png, image/jpeg, image/jpg"
                        multiple
                        onChange={onChangephoto}
                    />
                    <h5 className="mb-1" style={{ background: "#0099ff", color: "white", padding: "10px", borderRadius: "10px" }}>Select File</h5>
                    <p className="m-0">or Drop File Here</p>
                </div>
            </label>
            {photos.length > 0 && (
                <div className="col-lg text-center">
                    <button
                        className="btn "
                        onClick={pdfGenerate}
                        style={{ background: "#0099ff", color: "white", borderRadius: "8px" }}
                    >
                        Download pdf
                    </button>
                </div>
            )}
            <div className="row mt-5">
                {photos.map((photo, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6  ">
                        <div className="card mb-4" style={{ height: '200px', }}>
                            <img
                                alt="not found"
                                className="card-img-top"
                                src={URL.createObjectURL(photo)}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />

                        </div>
                    </div>
                ))}
            </div>



        </div>

    )
}

export default ImageToPdf