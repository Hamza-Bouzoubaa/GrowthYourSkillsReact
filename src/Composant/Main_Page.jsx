import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MainPage.css';
import Chat from '../Composant/Chat';
import { Link } from 'react-router-dom';



function Main_Page() {
  return (
    <div>
    <div className="section-container mb-5">
    
    <h1 className="section-title pt-5">Who Will You Become During <br></br> Challenging Times?</h1>
    <p className="section-text">
    During tough times, true achievers invest in their skills and level up, paving the way to fulfill their dreams.<br></br>
    Join our mentoring program, embrace growth, and surge ahead towards a brighter future.<br></br> Let us guide you on this transformative journey of success.
    </p>

    




    <div class="d-flex justify-content-center pb-3">
      
  

  
</div>



    


</div>

<div className='section2 '>
    <h1 className='section-text2'>How does it work?</h1>
    <div class="center-image">
    <img className='mb-3' src={`${process.env.PUBLIC_URL}/steps.png`}  alt="Logo" height="321" width="1224" />
  </div>



  </div> 

  <div className='center-image mt-5'>
  <Link to="/Cours">
  <button class="start-button ">Start Now</button> 
  </Link>

  </div>

  <Chat/>


    </div>

    
);
}

export default Main_Page;



