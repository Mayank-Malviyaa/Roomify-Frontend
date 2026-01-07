import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoommateList from "./pages/RoommateList";
import AddListing from "./pages/AddListing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<RoommateList />} />
        <Route path="/add" element={<AddListing />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
