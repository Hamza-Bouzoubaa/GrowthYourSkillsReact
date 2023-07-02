import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Prof_page from './Pages/Prof_page';
import Cours_page from './Pages/Cours_page';
import HowItWorks_page from './Pages/HowItWorks_page' ;



import {
createBrowserRouter,
RouterProvider,
Route,

} from "react-router-dom";

const router = createBrowserRouter([
{
  path:"/",
  element: <App/>,
},
{
  path:"/GrowthYourSkillsReact",
  element: <App/>,
},



{
  path:"Prof",
  element: <Prof_page/>,
},

{
  path:"Cours",
  element: <Cours_page/>,
},
{
  path:"HowItWorks",
  element: <HowItWorks_page/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
