import "./App.css";
import Banner from "./components/Banner";
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
      
        
      </main>
    </>
  );
}

export default App;
