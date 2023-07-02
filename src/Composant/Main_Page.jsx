import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MainPage.css';
import Chat from '../Composant/Chat';


function Main_Page() {
  return (
    <div>
    <div className="section-container">
    
    <h1 className="section-title pt-5">Who Will You Become During <br></br> Challenging Times?</h1>
    <p className="section-text">
    During tough times, true achievers invest in their skills and level up, paving the way to fulfill their dreams.<br></br>
    Join our mentoring program, embrace growth, and surge ahead towards a brighter future.<br></br> Let us guide you on this transformative journey of success.
    </p>

    <hr className='mx-5' style={{ background: "#E79F35",height: "5px",border: "none",}}/>




    <div class="d-flex justify-content-center pb-3">
      
  <button class="btn btn-primary btn-lg">Join Now</button>

  
</div>



    


</div>

<div className='section2'>
    <h1 className='section-text2'>How does it work?</h1>
    <div class="center-image">
    <img className='mb-3' src={`${process.env.PUBLIC_URL}/steps.png`}  alt="Logo" height="321" width="1224" />
  </div>



  </div> 

  <div className='center-image'>

  <button class="start-button ">Start Now</button> 

  </div>

  <Chat/>


    </div>

    
);
}

export default Main_Page;



