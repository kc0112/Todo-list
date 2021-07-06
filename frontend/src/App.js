
import React, { useState } from 'react';
import Header from './components/Header'
import Loginc from './components/Loginc'
import Signup from './components/Signup'
import Contact from './components/Contact/Contact';
import TodoList from './components/Task/TodoList';
import Login from "./components/Login/index"
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// var cors = require('cors');
import axios from 'axios'


function App() {

  const [loginDetails, setLoginDetails] = useState([]);
  const [signUpDetails,setSignupDetails] = useState([]);

  const setLogKeys = (detail) => {
    console.log(detail)
    setLoginDetails(detail);
  }

  const setSignKeys = async(detail) => {
    console.log(detail)
    setSignupDetails(detail);

    await axios.post("http://127.0.0.1:8000/user/signup/", detail)
      .then(response => console.log("RES",response))
      .catch(err => console.log("ERROR: ", err))
    
  //     async function Name() {
  //       let response = () => {
  //         return new Promise(function(resolve, reject) {
  //           fetch('http://127.0.0.1:8000/user/signup/', detail).then(response => {
  //             resolve(response);
  //           });
  //         });
  //       };
  //       let responseData = await response();
  //       console.log(responseData.data);
  // }
  // Name()
    
    console.log("djd")
  }


  return (
    <>
      <Router>
        <Header name={loginDetails.username} />
        <Switch>
          <Route path="/" exact render={(props) => (
            <Loginc {...props}  setKeys={setLogKeys}/>
          )} />
 <Route path="/login" component = { Login }/>
        <Route path="/signup" render={(props) => (
          <Signup {...props} setKeys={setSignKeys}/>
          )} />
          
          <Route path="/home" component={TodoList} />

          <Route path="/contact" component={Contact} />

        </Switch>
      </Router>
      
    </>
  );
}

export default App;
