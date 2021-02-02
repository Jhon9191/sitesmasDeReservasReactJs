import react from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import Reservas from './components/Reservas'


export default function Routes() {
    return (
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Reserva" component={Reservas}/>
      </Switch>
    );
   }