import React, { useState } from 'react';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const renderProgressBar = () => {
    return (
      <div className="progress">
        <div className={`progress-bar progress-bar-striped bg-info`} style={{ width: `${(step / 3) * 100}%` }} />
      </div>
    );
  };

  const renderStepOne = () => {
    return (
      <div className="step-one">
        <h2>Step 1: Personal Information</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleNextStep}>Next</button>
      </div>
    );
  };

  const renderStepTwo = () => {
    return (
      <div className="step-two">
        <h2>Step 2: Class Date Selection</h2>
        <div className="form-group">
          <label>Select a date:</label>
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <button className="btn btn-secondary mr-2" onClick={handlePreviousStep}>Previous</button>
        <button className="btn btn-primary" onClick={handleNextStep}>Next</button>
      </div>
    );
  };

  const renderStepThree = () => {
    return (
      <div className="step-three">
        <h2>Step 3: Terms and Conditions</h2>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={termsAccepted}
            onChange={handleTermsChange}
          />
          <label className="form-check-label">I accept the terms and conditions.</label>
        </div>
        <button className="btn btn-secondary mr-2" onClick={handlePreviousStep}>Previous</button>
        <a href="/">
        <button className="btn btn-primary" disabled={!termsAccepted}>
         Book Now
      </button>
</a>

      </div>
    );
  };

  return (
    <div className="booking-form container mt-5">
      {renderProgressBar()}
      {step === 1 && renderStepOne()}
      {step === 2 && renderStepTwo()}
      {step === 3 && renderStepThree()}
    </div>
  );
};

export default BookingForm;
