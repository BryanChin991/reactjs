import React from 'react';
import ReactDOM from 'react-dom';
import{Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Birthday from './tutorial/1-useState/BirthdayExample'
import 'bootstrap/dist/css/bootstrap.min.css';
import UseEffect from './tutorial/2-useEffect/basic';
import Users from './tutorial/2-useEffect/Users';
import MultipleReturn from './tutorial/3-conditional-rendering/MultipleReturn';
import ShortCircuit from './tutorial/4-short_circuit/ShortCircuit';
import ShowHide from './tutorial/3-conditional-rendering/ShowHide';
import ControlledInput from './tutorial/5-Form/Controlled-input';
import Multiple from './tutorial/5-Form/Multiple-input';
import useRefBasics from './tutorial/6-useRef/useRef-basics';
import useReducer from './tutorial/7-useReducer'

function Router(){
  return(
    <BrowserRouter>
      <Route exact path='/usestate' component={App}/>
      <Route path='/birthday' exact component={Birthday}/>
      <Route path='/useEffect' exact component={UseEffect}/>
      <Route path='/useEffect-user' exact component={Users}/>
      <Route path='/mulreturn' exact component={MultipleReturn}/>
      <Route path='/short-circuit' exact component={ShortCircuit}/>
      <Route path='/showhide' exact component={ShowHide}/>
      <Route path='/form' exact component={ControlledInput}/>
      <Route path='/form-multi' exact component={Multiple}/>
      <Route path='/useRef' exact component={useRefBasics} />
      <Route path='/useReducer' exact component={useReducer}/>
  </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);