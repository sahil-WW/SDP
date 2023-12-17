import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
// import Error from './Error.jsx'
import reportWebVitals from './reportWebVitals';
import {  createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Hero from './components/Hero'
import Section from './components/Section'
import Header from './components/Header'
import Error from './Error'
import Profile from './components/Profile';
import ShowDetails from './components/ShowDetails.jsx'
import Orders from './components/Orders.jsx';
import Footer from './components/Footer.jsx'
const appRouter=createBrowserRouter([{

  path:'/',
  element:<App></App>,
  errorElement:
  <>
  <Header></Header>
  <Error></Error>
  </>,
  children:[

    {
      path:'/',
      element:<>
      <Hero/>
        <Section/>
        <Footer />
        </>
    },  

    {path:'orders',
    element:<Orders/>
  },
    {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/movie/:id',
    element:<ShowDetails></ShowDetails>
  }
]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
