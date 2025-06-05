// Education.js
import React from 'react';
import './Education.css';
import uscLogo from '../../assets/logo.PNG'; // Adjust the path as necessary
import admission from '../../assets/admission.jpeg';

const Education = () => {
  return (
    <div style={{paddingTop: "5%", paddingBottom: "5%", backgroundImage: `url(${admission})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
    <div className="education-container">
      <div className="logo-box">
        <img src={uscLogo} alt="USC Logo" className="logo-image" />
      </div>
      <div className="info">
        <h1>Bachelor of Science, Computer Science</h1>
        <h2>Artificial Intelligence Minor</h2>
        <h3>Viterbi School of Engineering</h3>
        <p>GPA: <span className="gpa">4.0</span></p>
        <p>Relevant Courses:</p>
        <ul>
          <li>Multivariable Calculus</li>
          <li>Probability Theory</li>
          <li>C++ Data Structures and OOP</li>
          <li>Discrete Mathematics</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Education;
