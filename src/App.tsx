import { BrowserRouter, Route } from "react-router-dom";
import PeoplePage from "./pages/PeoplePage";
import HomePage from "./pages/HomePage";
import PeoplePageGuide from "guide/pages/PeoplePageGuide";
import PlanetsPage from "./pages/PlanetsPage";
import StarshipsPage from "./pages/StarshipsPage";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <h1>Star Wars</h1>
        <Nav />
        <Route path="/" exact component={PeoplePageGuide} />
        <Route path="/people" exact component={PeoplePage} />
        <Route path="/planets" exact component={PlanetsPage} />
        <Route path="/starships" exact component={StarshipsPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
