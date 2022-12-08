import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Abm from './components/Abm';
import dbamanager from './components/dbmanager';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component= {Home} />
        <Route exact path='/abm' component= {Abm} />
        <Route exact path='/login' component= {dbamanager} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
