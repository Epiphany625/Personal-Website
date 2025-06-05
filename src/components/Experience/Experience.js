// src/Hobbies.js
import React from 'react';
import InfoCard from '../InfoCard/InfoCard.js';
import ExperienceBG from '../../assets/experience.JPG';
import './Experience.css'; // Import the CSS file
import ReturnToTop from '../ReturnToTop/ReturnToTop.js';

const Experience = () => {
  const photos = [
    'stealth.png',
    'mcc.png',
    'td.png',
  ]; // Replace with your actual photo filenames

  const [text, setText] = React.useState("ME");


  React.useEffect(() => {
    let count = 0;
    const animation = function(){
      if(count === 0){
        setText("ME");
        count++;
      }
      else if(count === 1){
        setText("US");
        count++;
      }
      else if(count === 2){
        setText("MORE");
        count++;
      }
      else{
        clearInterval(animate);
      }     
    }

    const animate = window.setInterval(animation, 1200);
  }, [])

  const stealthDescript1 = "As a software engineering intern in autonomous driving, I bettered the process of converting DBC files to M Scripts with Python. This significantly improved efficiency of manual file conversions. I also developed a MATLAB Simulink model for automatic error detection so coworkers are better able to simulate their truck models. ";
  const stealthDescript2 = "Right now, I am currently working on the project that utilizes Raspberry Pi to send instructions to simulated trucks with handlers and C++ programming."
  const marshallDescript = "In September 2023, I was elected as the VP of Operations for the Marshall Consulting Club. I managed fund arrangements and spearheaded the recruitment process. Additionally, I leveraged my coding and technical skills to assist in technical consulting and conducted a research study in the cybersecurity industry, deepening my understanding of policies and algorithms related to AI philosophy.";
  const tdDescript = "During my work at TestDaily, I tutored over 100 students in SAT, TOEFL, and AP Computer Science preparations. Working 15 hours per week, I consistently received a perfect 5/5 rating from every student.";
    
  return (
<div 
  style={{
    backgroundImage: `url(${ExperienceBG})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundAttachment: 'fixed', 
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="experience-container" id="experience-container">
    <h1 className="experience-title">
      BECOMING 
      <span 
        style={{
          backgroundColor: "#1e3a8a", 
          color: "#cbe1f7", 
          fontSize: "1.3em", 
          padding: "5px", 
          borderRadius: "8px"
        }}
      >
        {text}
      </span>
    </h1>

    <div className="photos-container">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={require(`../../assets/${photo}`)} // Adjust path if necessary
          alt={`Hobby ${index + 1}`}
          className="experience-photo"
        />
      ))}
    </div>

    <InfoCard 
      image="stealth.png" 
      title="Bot Auto TX Inc., Autonomous Driving Software Engineering Intern" 
      sub="Jun 2024 - Present" 
      description1={stealthDescript1} 
      description2={stealthDescript2} 
      location="Houston, TX" 
    />

    <InfoCard 
      image="mcc_descript.png" 
      title="Marshall Consulting Club, VP of Operations" 
      sub="Aug 2023 - May 2024" 
      description1={marshallDescript} 
      location="Los Angeles, CA" 
    />
    
    <InfoCard 
      image="td.png" 
      title="TestDaily, Associative Tutor" 
      sub="Present and Forever" 
      description1={tdDescript} 
    />
    
    <ReturnToTop idName="experience-container" />
  </div>
</div>
  );
};

export default Experience;
