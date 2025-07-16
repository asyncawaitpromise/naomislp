import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Homepage from "./routes/Homepage.jsx";
import About from "./routes/About.jsx";
import Therapy from "./routes/Therapy.jsx";
import Contact from "./routes/Contact.jsx";
import Reference from "./routes/Reference.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Reference />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100"><div className="text-center"><h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1><p className="text-gray-600">The page you're looking for doesn't exist.</p></div></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;