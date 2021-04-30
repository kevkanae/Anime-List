import MyAppBar from "./Components/AppBar";
import { BrowserRouter, Route } from "react-router-dom";
import MangaComponent from "./Pages/Manga";
import { useEffect } from "react";
import AnimeComponent1 from "./Pages/Anime1";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#d8e3e7";
  }, []);
  return (
    <div>
      <BrowserRouter>
        <MyAppBar />
        <Route exact path={"/Anime-List"} component={AnimeComponent1} />
        <Route path={"/manga"} component={MangaComponent} />
      </BrowserRouter>
    </div>
  );
}

export default App;
