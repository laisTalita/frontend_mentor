import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import CountryDetails from "./Components/pages/CountryDetails";
import Header from "./Components/body_components/Header";
import { useEffect, useState} from "react";
import Fotter from "./Components/body_components/Fotter";

function App() {
  const [modeDark, setModeDark] = useState(false)

  useEffect(()=>{
    modeDark?document.body.classList.add("darkMode"):document.body.classList.remove("darkMode")

  },[modeDark])

  return (
    <div className="App">
      <Header modeDark={modeDark} setModeDark={setModeDark}/>

      <BrowserRouter>
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:code" element={<CountryDetails />} />
            </Routes>
          </main>
      </BrowserRouter>
      <Fotter/>
    </div>
  );
}

export default App;
