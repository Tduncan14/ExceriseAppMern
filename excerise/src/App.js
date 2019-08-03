import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import ExercisesList from "./components/Exercise_list";
import EditExercise from "./components/Edit_Excerise";
import CreateExercise from "./components/CreateExcerise";
import CreateUser from "./components/Create_User";

function App() {
  return (

    <Router>
  
      <Navbar />
      <div className="container">
      <br/>
      <Route exact path = "/" component ={ExercisesList} />
      <Route exact path ="/edit/:id" component = {EditExercise}/>
      <Route exact path = "/create"  component ={CreateExercise}/>
      <Route exact path = "/user" component ={CreateUser} /> 
      </div>    
    </Router>
     

   
  );
}

export default App;
