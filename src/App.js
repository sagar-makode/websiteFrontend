
import './App.css';
import Navbar from './component/Navbar';
import { Routes, BrowserRouter as Router,Route } from "react-router-dom"
import Home from './component/Home';
import 'font-awesome/css/font-awesome.min.css';
import ImageComp from './component/tools/ImageComp';
import Footer from './component/Footer';
import ImageToPdf from './component/tools/ImageToPdf';
import PdfCompressor from './component/tools/PdfCompressor';
import PdfToImg from './component/tools/PdfToImg';



function App() {
  return (
    <Router>
        
    <Navbar />      
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/compressimage" element={<ImageComp/>} />
      <Route exact path="/imagetopdf" element={<ImageToPdf/>} />
      <Route exact path='/pdftoimg' element={<PdfToImg/>}/>
      <Route exact path='/pdfcompressor' element={<PdfCompressor/>}/>

    </Routes>
    <Footer/>
    
  

  </Router >
  );
}

export default App;
