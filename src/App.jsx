import React from 'react'

import { Header } from './components/Header/header'
import { LaunchView } from './components/LanchView/LanchView'
import { LaunchList } from './components/LaunchesList/LaunchesList'
import './styles.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";




function App() {
  return (
    <div className="App">      

      <Router>

        <Header />

           <Switch>

             <Route path="/Launch/:flight_number"><LaunchView /></Route>

             <Route path="/"><LaunchList /></Route>

           </Switch>


      </Router>



    </div>

  );
}

export default App;
