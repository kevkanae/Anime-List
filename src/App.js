import { useEffect } from "react";
import MyNavbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#d8e3e7";
  }, []);

  return (
    <div>
      <MyNavbar />
      <Home />
    </div>
  );
}

export default App;
