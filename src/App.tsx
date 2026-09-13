import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TechnologiesContainer from "./components/TechnologiesContainer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Banner />

        <TechnologiesContainer />
      
        <ToastContainer />
      </main>

      <Footer />
    </>
  );
}

export default App;
