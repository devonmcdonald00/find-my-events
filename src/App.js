import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Appbar from './Components/Appbar'
import EventsDisplay from './Components/EventsDisplay'
import EventForm from './Components/EventForm'


function App() {
  
  return (
    <div className="App">
      <Router>
        <Appbar/>
        <Switch>
          <Route exact path='/'>
            <EventsDisplay/>
            <Link to='/add-event' className="link-button">
              <Button variant='contained' style={{backgroundColor: 'rgb(26, 43, 43)', color: 'white'}}>Add Events</Button>
            </Link>
          </Route>
          <Route exact path='/add-event'>
            <EventForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
