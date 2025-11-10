import React from 'react';
import './Introduction.css';
import MyPhoto from '../../assets/my-photo.JPG';
import { Link } from 'react-router-dom';
import Dream from '../../assets/dream.jpg';

const Introduction = () => {
  const levels = ["freshman", "sophomore", "junior", "senior"];
  const enrollYear = 2023;
  const currYear = new Date().getFullYear();
  
  let grade;
  const diff = currYear - enrollYear;

  if (diff >= 0 && diff < 4) {
    grade = levels[diff];
  } else if (diff >= 4) {
    grade = "graduate";
  } else {
    grade = "incoming student";
  }

  return (
    <div
      style={{
        padding: "5%",
        backgroundImage: `url(${Dream})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="introduction-container">
        <div className="introduction-photo-container">
          <img src={MyPhoto} alt="Personal Display" className="introduction-photo" />
        </div>
        <div className="introduction-text">
          <h1>Hello, nice to meet you!</h1>
          <p>
            My name is Xinyang Xu, but you can also call me Leo. I am currently in Los Angeles,
            pursuing a major in Computer Science at USC as a {grade} student. I love coding and am
            excited to share more about myself on this website.
          </p>
          <p>
            Leo's most fascinating hobby:{" "}
            <Link to="/hobbies">
              <b style={{ color: "#00aaff" }}>Drone Photography!</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

