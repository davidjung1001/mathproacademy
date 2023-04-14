import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recipes/:id">
          <Recipe />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App
