import React, { useState, useEffect } from 'react';
import InfoCard from '../InfoCard/InfoCard.js';
import Helloworld from '../../assets/helloworld.png';
import './Projects.css';
import ReturnToTop from '../ReturnToTop/ReturnToTop.js';

const Projects = () => {
  const photos = [
    'javascript.png',
    'cpp.png',
    'python.png',
    'simulink.png',
    'ts.png',
  ];

  const websiteDescript1 = "In May 2024, I participated in the Meta Front End Developer Professional Certificate Program. I created a personal website to introduce my hobbies, professional experiences, projects, and more related to computer science.";
  const websiteDescript2 = "I utilized 15+ components while building the website and implemented SPA design with React Router DOM. I plan to add stateful aspects in future development.";
  const gomokuDescript1 = "I am a fan of Gomoku. To combine my passion for Gomoku and coding, I built a website primarily using JavaScript to replicate the Gomoku game. With about 400 lines of code, the website accurately detects winners, recalls steps, and corrects errors. It is deployed with AWS Amplify. ";
  const gomokuDescript2 = "In the monthly updates, I plan to add more functionalities to this website and improve the UI design in greater detail.";
  const USCheduleDescript1 = "I developed a program called USChedule using C++ for efficient course scheduling for USC students. It offers functionalities like automatically building a schedule with latest wake-up time, fewest Friday classes, and more.";
  const USCheduleDescript2 = "The program is updated monthly to fine-tune basic parameters and add new functionalities.";
  const revenueAnalysisDescript1 = "I utilized popular Python libraries like Pandas, Matplotlib, etc. with public APIs like yfinance to analyze the historical stock and revenue data of Netflix and Tesla. I conducted both exploratory and in-depth data analysis in an effort to make informed financial decisions. "
  const [code, setCode] = useState(">>>");
  const text = "DREAM IT. CODE IT.";

  useEffect(() => {
    let count = 0;

    const animate = () => {
      if (count < text.length) {
        setCode(">>> " + text.substring(0, count + 1));
        count++;
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(animate, 250);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div style={{backgroundImage: `url(${Helloworld})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
      <div className="projects-container" id="projects-container">
        <h1 className="projects-title"><code>{code}</code></h1>
        <div className="photos-container">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={require(`../../assets/${photo}`)} // Adjust path if necessary
              alt={`Project ${index + 1}`}
              className="projects-photo"
            />
          ))}
        </div>
        <InfoCard 
          image="website.png" 
          title="*This* website" 
          sub="May 2024 - June 2024, actively maintained" 
          description1={websiteDescript1} 
          description2={websiteDescript2}
          repoLink="https://github.com/Epiphany625/Epiphany625.github.io"
        />
        <InfoCard 
          image="gomoku.png" 
          title="Gomoku" 
          sub="May 2024, actively maintained" 
          description1={gomokuDescript1} 
          description2={gomokuDescript2}
          repoLink="https://github.com/Epiphany625/Gomoku" 
          webLink="https://main.dxcuebsw4mhmn.amplifyapp.com/"
        />
        <InfoCard 
          image="USChedule.png" 
          title="USChedule" 
          sub="Mar 2024 - Apr 2024, holding updates once a month" 
          description1={USCheduleDescript1} 
          description2={USCheduleDescript2}
          repoLink='https://github.com/Epiphany625/USChedule' 
        />
        <InfoCard 
          image="stock.png" 
          title="Historical Stock & Revenue Analysis" 
          sub="Dec 2023 - Jan 2024" 
          repoLink='https://github.com/Epiphany625/StockDataWebscraping'
          description1={revenueAnalysisDescript1}
        />
        <ReturnToTop idName="projects-container" />
      </div>
      
    </div>
  );
};

export default Projects;
