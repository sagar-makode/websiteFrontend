import React from 'react';
import img from '../images/photo.png';
import './Home.css'; // Import a CSS file to apply styling
import { TypeAnimation } from 'react-type-animation';


function Home() {
   



    return (
        <div  >
            <div style={{ position: "relative" }}>
                <img src={img} alt="Responsive" className="responsive-image" />
                <h1 className='text-overlay' >
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Make Your for Image',
                            1000,
                            // wait 1s before replacing "Mice" with "Hamsters"
                            'Make Your for PDF',
                            1000,

                            'Make Your for File',
                            1000,

                            'Make You for news',
                            1000,

                        ]}
                        wrapper="span"
                        speed={250}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>


            </div>





            <div className='tools'>
                <div className='overlay-container '>
                    <div className="card" onClick={() => navigator('/editimage')}>
                        <div className=" bg-light text-center p-4">
                            <i className="fa fa-3x fa-image icon-color mb-4"></i>
                            <h5 className="mb-3">Compress Image</h5>
                            <p className="m-0">Reduce Your Image Size Using This Tool</p>
                        </div>
                    </div>
                </div>
                <div className='overlay-container '>
                    <div className="card" onClick={() => navigator('/editimage')}>
                        <div className=" bg-light text-center p-4">
                            <i className="fa fa-3x fa-object-group icon-color mb-4"></i>
                            <h5 className="mb-3">Image to PDF</h5>
                            <p className="m-0">Convert your Image To One PDF</p>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <div className="card" onClick={() => navigator('/editimage')}>
                        <div className=" bg-light text-center p-4">
                            <i className="fa fa-3x fa-file-pdf-o icon-color mb-4"></i>
                            <h5 className="mb-3">Compress PDF</h5>
                            <p className="m-0">Reduce Your PDF Size Using This Tool</p>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <div className="card" onClick={() => navigator('/editimage')}>
                        <div className=" bg-light text-center p-4">
                            <i className="fa fa-3x fa-object-ungroup icon-color mb-4"></i>
                            <h5 className="mb-3">PDF To Image</h5>
                            <p className="m-0">Convert Your PDF To Image</p>
                        </div>
                    </div>
                </div>





            </div>

            <div className='cont'>
                <div className='news-container'>
                    <div className='title'>
                        Latest Form
                    </div>

                    <ul>
                        <li>
                            MahaDBT Scholership<span className='badge bg-danger mx-2'>
                                New
                            </span>
                        </li>

                        <li>
                            Kamgar Kalyan Scholership<span className='badge bg-danger mx-2'>
                                New
                            </span>
                        </li>

                        <li>
                            Cast Validity Application<span className='badge bg-danger mx-2'>
                                New
                            </span>
                        </li>

                        <li>
                            Badhakam kamgar Scholership <span className='badge bg-danger mx-2'>
                                New
                            </span>
                        </li>
                    </ul>
                </div>

            </div>


            <div className='py-5' >
                <div className='container py-5 px-lg-5'>
                    <div className='text-center'>
                        <div>
                            <h4><span style={{ color: "red" }}>-- </span>Forms<span style={{ color: "red" }}> --</span></h4>
                            <h1 className='mb-4'> Make Your Image As Per Required Form</h1>
                            <h4 className='mb-4'> Just Upload Your Image or PDF And Download</h4>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;
