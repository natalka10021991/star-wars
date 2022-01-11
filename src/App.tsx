import { BrowserRouter, Route } from 'react-router-dom';
import People from './pages/People';
import './App.css';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import Planets from './pages/Planets';
import Starships from './pages/Starships';

function App() {
  

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <h1>Star Wars</h1>
        <Nav />
        <Route path="/" exact component={HomePage} />
        <Route path="/people" exact component={People} />
        <Route path="/planets" exact component={Planets} />
        <Route path="/starships" exact component={Starships} />
      </div>
    </BrowserRouter>
  );
}

export default App;
