import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div  style={{ textDecoration: 'none' , marginTop:"30px"}}>

      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#0099ff' }}>

        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
            {/* col-lg-3 col-md-4 col-sm-6  */}
              <div className="col-lg-3 col-md-4 col-sm-6  mx-auto mt-3">
                <h5 className=" mb-4 font-weight-bold " style={{ textDecoration: 'underline' }}>Quick Links</h5>
                <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-home" ></i> Home
                    
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-white " style={{ textDecoration: 'none' }}>
                  <i className="fa fa-users" style={{ marginRight: '5px' }} > </i>
                     About Us</Link>
                </p>
                <p>
                  <Link className="text-white" style={{ textDecoration: 'none' }}>
                  <i className="fa fa-user-secret" style={{ marginRight: '5px' }} > </i>
                    
                    Privacy Policy</Link>
                </p>
                <p>
                  <Link className="text-white" style={{ textDecoration: 'none' }}>
                  <i className="fa fa-lock" style={{ marginRight: '5px' }}> </i>
                    
                    Term & Condition</Link>
                </p>
              <hr className="w-100 clearfix d-md-none" />

              </div>



              <div className="col-lg-3 col-md-4 col-sm-6  mx-auto mt-3">
                <h5 className=" mb-4 font-weight-bold " style={{ textDecoration: 'underline'  }}>Tools</h5>
               
             
                <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-image" ></i> Compress Image
                    
                  </Link>
                </p>
                <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-object-group" ></i> Image To PDF
                    
                  </Link>
                </p>
                <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-file-pdf-o" ></i> Compress PDF
                    
                  </Link>
                </p>
                <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-object-ungroup" ></i> PDF To Image
                    
                  </Link>
                </p>
               
              <hr className="w-100 clearfix d-md-none" />

              </div>


              <div className="col-lg-3 col-md-4 col-sm-6  mx-auto mt-3">
                <h5 className=" mb-4 font-weight-bold" style={{ textDecoration: 'underline',  }}>
                  Latest From
                </h5>
                <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-chevron-right" ></i> MahaDBT Scholership
                    
                  </Link>
                </p> <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-chevron-right" ></i> Caste Validity Application
                    
                  </Link>
                </p> <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-chevron-right" ></i> Kamgar Kalyan Scholership
                    
                  </Link>
                </p> <p>
                  <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                    <i className="fa fa-chevron-right" ></i> Badhakam kamgar Scholership
                    
                  </Link>
                </p>

                <hr className="w-100 clearfix d-md-none" />
              </div>

              

              {/* Grid column */}
              <div className="col-lg-3 col-md-4 col-sm-6  mx-auto mt-3">
                <h5 className="mb-4 font-weight-bold" style={{ textDecoration: 'underline', textAlign:"center" }}> Need Any Latest Form Related Tool Massage Here </h5>
                <form >
                  <div className="mb-3 "style={{textAlign:"center"}}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Message"
                      style={{textAlign:"center"}}
                    // value={userFeedback}
                    // onChange={handleFeedbackChange}
                    />
                     <button type="submit" className="btn btn-light my-2" >
                    Send
                  <i className="fa fa-paper-plane " style={{marginLeft:"6px"}} ></i>
                    </button>
                  </div>
                 
                </form>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2023 Copyright:
                  <Link className="text-white" to="/">
                    MakemyImage
                  </Link>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <Link className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i className="fa fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i className=" fa fa-whatsapp"></i>
                </Link>

               

                <Link className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i className="fa fa-telegram"></i>
                </Link>

                <Link className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i className="fa fa-youtube-play"></i>
                </Link>

                <Link className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i className="fa fa-instagram"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
