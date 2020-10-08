import React, {Component} from 'react';
import {Nav, Navbar,Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Home'
import Bus from './Bus'
import Stops from './Stops'

import Next3bus from './component/next3bus';

class App extends Component {

  state = {
    next3bus: []
  }

  componentDidMount() {
    fetch('http://api.octranspo1.com/v1.3/GetNextTripsForStop?appID=9558d7ea&apiKey=45f450a3480871cb9965070ac9a51040&stopNo=3037&format=json&routeNo=6')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState({ next3bus: data.GetNextTripsForStopResult.Route.RouteDirection[1].Trips.Trip })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link > <Link to = '/'>Home</Link></Nav.Link>
        <Nav.Link > <Link to = '/Bus'>Bus</Link></Nav.Link>
        <Nav.Link > <Link to = '/Stops'>Stops</Link></Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    <Switch>
      <Route component={Bus} path="/Bus"></Route>
      <Route component={Stops} path="/Stops"></Route>
      <Route component={Home} path="/"></Route>   
  </Switch>
    </Router>
<div>
<Next3bus next3buses={this.state.next3bus} />
</div>

      </div> 
    
    )
  }
}


export default App;
