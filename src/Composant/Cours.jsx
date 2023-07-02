import React from 'react';
import styled from 'styled-components';
import Chat from './Chat';

const Container = styled.div`
  text-align: center;
  margin: 25px;
  font-size: 20px;
  font-family: 'Playfair Display', sans-serif;
  font-weight: 700;
`;

const Background = styled.body`
  background-color: rgb(255, 255, 255);
`;

const Cours = () => {
  return (
    <Background>
      
      <h1 className="px-3 mb-5 mt-4 text-center">Be the best version of yourself</h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Learn IT</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Practice IT</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Master IT</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: '90%' }}>
              <img src="/IT.jpg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Chat></Chat>
        
    </Background>
    

    
);
}

export default Cours;



