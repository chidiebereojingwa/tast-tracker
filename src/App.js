import { Switch, Route } from 'react-router';
import './App.css';
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/home" exact>
        <Homepage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
