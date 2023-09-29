import React from 'react'
import { Link, NavLink } from "react-router-dom"

function Navbar() {
    const navbarStyle = {
        background: "#0099ff", // Blue background color
        color: 'white', // White text color
        fontSize: "20px",
       
    };
    const buttonStyle = {
        background: 'white', // White background color
        color: '#0099ff', // Blue text color
        border: 'none', // Remove border
    };

    return (
        <nav className="navbar navbar-expand-lg " style={navbarStyle}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"style={navbarStyle}>
                    <h2 className="m-0">Make My Image</h2>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={buttonStyle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/" style={navbarStyle}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/editimage" style={navbarStyle}>
                                Edit Image
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                to="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={navbarStyle}
                            >
                                PDF Tools
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to="/imagetopdf">
                                        Image To PDF
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/pdftoimg">
                                        PDF to Image
                                    </NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/pdfcompressor">
                                        PDF Compressor
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                to="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={navbarStyle}
                            >
                                Latest Form
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to="/imagetopdf">
                                    Diploma Admission
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/pdftoimg">
                                    ITI Admission
                                    </NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/pdfcompressor">
                                    Medical Admission
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                       
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" style={navbarStyle}>
                                Sign In
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" style={navbarStyle}>
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;
