import MyAppBar from "./Components/AppBar";
import { BrowserRouter, Route } from "react-router-dom";
import AnimeComponent from "./Pages/Anime";
import MangaComponent from "./Pages/Manga";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#d8e3e7";
  }, []);
  return (
    <div>
      <BrowserRouter>
        <MyAppBar />
        <Route exact path={"/"} component={AnimeComponent} />
        <Route path={"/manga"} component={MangaComponent} />
      </BrowserRouter>
    </div>
  );
}

export default App;
