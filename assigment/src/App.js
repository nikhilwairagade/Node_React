import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Employee } from './controller/employee';
import { Home } from './controller/home';

function App() {
  const [role, setRole] = useState('employee');
  
  return (
    <>
      <Home />
      {/* <Employee /> */}
    </>
    // <Router basename={'/'}>
    //         <Route exact path='/home'  component={Home} />
    //         {/* {
    //           role === 'employee' ? 
    //            <Router exact path='/employee' component={Employee} />
    //            :
    //            <Router exact path='/employee' component={Employee} />
    //         } */}
    // </Router>
  );
}

export default App;
