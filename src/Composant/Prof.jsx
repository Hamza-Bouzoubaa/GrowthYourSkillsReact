import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Chat from './Chat';


const professorsData = [
  {
    name: 'John Smith',
    description: 'John Smith is a highly experienced professor in the field of IT. He specializes in programming languages and software development.',
    language: 'english',
    classType: 'IT',
    image: 'https://anthropology.fas.harvard.edu/sites/projects.iq.harvard.edu/files/styles/profile_full/public/anthropology/files/comaroff_john_0_1.jpg?m=1623336730&itok=MokzmV_s',
    
  },
  {
    name: 'Emily Johnson',
    description: 'Emily Johnson is an expert professor in the IT field. She has extensive knowledge of database management and system architecture.',
    language: 'english',
    classType: 'IT',
    image: 'https://www.gse.harvard.edu/sites/default/files/faculty/images/martha-minow-110.jpg',
  },
  {
    name: 'Michael Williams',
    description: 'Michael Williams is a renowned professor specializing in IT security and network administration.',
    language: 'english',
    classType: 'IT',
    image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRtKONoRueEeZi7HGvsgrjnGAnhf_TF1d_5MLo0DCFaeXFSQANS2ikwKdsbL8AvayIa',
  },
  {
    name: 'Jessy Rodriguez',
    description: 'Jessy Rodriguez is a passionate professor of marketing. With his creative approach and industry knowledge, he guides students in developing effective marketing strategies.',
    language: 'english',
    classType: 'business',
    image: 'https://media.licdn.com/dms/image/C5603AQHIY_Cz3Sj8Ew/profile-displayphoto-shrink_800_800/0/1517422718735?e=2147483647&v=beta&t=HxIaG2HM13gDy_9Knew2lDNelRq0LTHau3Iztr4wDQQ',
  },
  {
    name: 'Sarah Davis',
    description: 'Sarah Davis is a dedicated professor with expertise in business management and entrepreneurship. She helps students develop essential skills for success.',
    language: 'english',
    classType: 'business',
    image: 'https://images.squarespace-cdn.com/content/v1/55dcde36e4b0df55a96ab220/1527114580241-U51ENM6UEWQRAJF9E8DX/Francesca+Gino+-+Harvard+Business+Researcher%2C+Professor%2C+and+Author?format=1000w',
  },
  {
    name: 'Robert Thompson',
    description: 'Robert Thompson is a seasoned professor in the field of finance. He has a deep understanding of financial markets and investments.',
    language: 'english',
    classType: 'finance',
    image: 'https://www.hbs.edu/Style%20Library/api/headshot.aspx?id=6466',
  },
];

const Filter = () => {
  const [classType, setClassType] = useState('');
  const [language, setLanguage] = useState('');

  const handleClassTypeChange = (event) => {
    setClassType(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const filteredProfessors = professorsData.filter((professor) => {
    if (classType && language) {
      return professor.classType === classType && professor.language === language;
    } else if (classType) {
      return professor.classType === classType;
    } else if (language) {
      return professor.language === language;
    }
    return true;
  });

  return (
    <div className="container">
      <h1 className="px-3 mb-5 mt-5 text-center">Find your prof</h1>
      <div className="row">
        <div className="col-lg-2 position-fixed start-0 p-3 ">
          <div>
            <div>
              <label htmlFor="classType">Class Type:</label>
              <select
                id="classType"
                value={classType}
                onChange={handleClassTypeChange}
                className="form-select"
              >
                <option value="">Select a class type</option>
                <option value="IT">IT</option>
                <option value="business">Business</option>
                <option value="finance">Finance</option>
              </select>
            </div>

            <div>
              <label htmlFor="language">Professor Language:</label>
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
                className="form-select"
              >
                <option value="">Select a language</option>
                <option value="english">English</option>
                <option value="french">French</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-text-center mx-5">
          {filteredProfessors.map((professor, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card" style={{ width: '90%' }}>
                <img src={professor.image} className="card-img-top" alt="image" height="400" />
                <div className="card-body">
                  <h5 className="card-title text-center">{professor.name}</h5>
                  <p className="card-text">{professor.description}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Chat></Chat>
    </div>
  );
};

export default Filter;
