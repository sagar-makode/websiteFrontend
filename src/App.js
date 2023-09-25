
import './App.css';
import Navbar from './component/Navbar';
import { Routes, BrowserRouter as Router,Route } from "react-router-dom"
import Home from './component/Home';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
        
    <Navbar />      
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      {/* <Route exact path="/editimage" element={<Imagecomp/>} /> */}
      {/* <Route exact path="/imagetopdf" element={<ImagetoPdf/>} /> */}
      {/* <Route exact path='/pdftoimg' element={<PdftoImg/>}/> */}
      {/* <Route exact path='/pdfcompressor' element={<PdfCompressor/>}/> */}

    </Routes>
    {/* <Footer/> */}
    
  

  </Router >
  );
}

export default App;
