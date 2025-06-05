// src/Hobbies.js
import React from 'react';
import InfoCard from '../InfoCard/InfoCard.js';
import hobbiesBg from '../../assets/hobbies_bg.jpeg';
import './Hobbies.css'; // Import the CSS file
import ReturnToTop from '../ReturnToTop/ReturnToTop.js';

const Hobbies = () => {
  const photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg',
  ]; // Replace with your actual photo filenames

  const droneDescript1 = "I hate limits. To overcome physical quarantine during COVID, I adopted drone flying to bring my eyes outside the apartment and view the world from a completely different perspective. It soon becomes my favorite hobbies, and I cannot travel anywhere without it."
  const droneDescript2 = "The five photos shown in the title of the page are stunningly taken with my drone. "
  const travelDescript1 = "Traveling enables me to go beyond where drones and eyes can reach. I love to travel around my country and beyond to feel the blend of different cultures and enjoy the spectacular views."
  const travelDescript2 = "The photo on the left and the background photo are taken in Boston, the city that I like the most. If you are also a travel enthusiast, let's go!"
  const pianoDescript1 = "Music is the cure. From practicing Chopin Etudes to myself, to being the piano accompanist for the school chorus, I enjoy every second for my participation of music. Being away from home, It is sad to lose so many opportunity to practice and to appreciate. "


  return (
    <div style={{backgroundImage:`url(${hobbiesBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat',}}>
      <div className="hobbies-container" id="hobbies-container">
        <h1 className="hobbies-title">------SKY IS THE LIMIT------</h1>
        <div className="photos-container">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={require(`../../assets/${photo}`)} // Adjust path if necessary
              alt={`Hobby ${index + 1}`}
              className="hobby-photo"
            />
          ))}
        </div>
        <InfoCard 
          image="drone.jpg" 
          title="Drone Photography" 
          sub="Sep 10th 2022 - Present" 
          description1={droneDescript1} 
          description2={droneDescript2} 
        />
        <InfoCard 
          image="piano.JPG" 
          title="Classic Music and Piano" 
          sub="Every Day and Night" 
          description1={pianoDescript1} 
        />
        <InfoCard 
          image="travel.JPG" 
          title="Traveling" 
          sub="Present and Forever" 
          description1={travelDescript1} 
          description2={travelDescript2} 
        />
        <ReturnToTop idName="hobbies-container"/>        
      </div>   
    </div>
  );
};

export default Hobbies;
