import React from 'react';
import './Profile.css';
import { Typewriter } from 'react-simple-typewriter';

const Profile = () => {
  return (
    <section className="profile-section" id="about">
      <div className="profile-intro">
        <img src="/nasya2.jpg" alt="Nasya" className="profile-photo" />
        <h1 className="typewriter-loop">
          <Typewriter
            words={["Hello, I'm Nasya 👋"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </h1>
        <p className="about-text">
          I'm a Computer Science student at <strong>Universitas Gadjah Mada</strong>, deeply passionate about
          <strong> artificial intelligence</strong> and <strong>machine learning</strong>. I enjoy learning, sharing, and building things that matter!
        </p>
      </div>

      <h2 className="section-subtitle">Education</h2>
 <div className="education-item-row">
  <img src="/sma.png" alt="SMA Logo" className="edu-logo-large" />
  <div className="edu-text">
    <h3>SMA Negeri 1 Bogor</h3>
    <p className="edu-details">2020 – 2023 | Average Score: 92.5</p>
  </div>
</div>

<div className="education-item-row">
  <img src="/ugm.png" alt="UGM Logo" className="edu-logo-large" />
  <div className="edu-text">
    <h3>Universitas Gadjah Mada</h3>
    <p className="edu-details">2023 – Present</p>
  </div>
</div>

    </section>
  );
};

export default Profile;
