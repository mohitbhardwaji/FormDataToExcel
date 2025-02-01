import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import DownloadButton from "./components/button/DownloadButton";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  const [data, setData] = useState([]);

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    // <div className="min-h-screen flex flex-col">
    //   <Navbar />
    //   <div className="flex-grow flex flex-col items-center justify-center">
    //     <Form onAddData={handleAddData} />
    //     <DownloadButton data={data} />
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default App;
