import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import { Outlet } from 'react-router-dom';
import Profile from './components/Profile.jsx';
// import {Outlet} from 'react-router-dom'
import data from './data.js'



function isJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

// Example usage:
// const  = /* Data r eceived from API */;





// {

// data.upcomingMovieData.map((moviedata)=>{
//   console.log(moviedata.movie_name)
// })

// }
// console.log(data.upcomingMovieData)
// const json=JSON.parse(data)
  // console.log(json.upcomingMovieData[0].movie_name);


function App() {
  return (
<>
<Header/>

<Outlet></Outlet>


   
</>
  );
}

export default App;
