import React from 'react';
import './Experiences.css';

const experienceList = [
  {
    title: 'Public Relations – GDGoC UGM',
    image: '/PR.jpg',
    description: 'Managing external communication, promoting tech events, and maintaining social media presence.', 
    period : 'October 2024 - Present'
  }, 
  {
    title: 'Programming Teaching Assistant',
    image: '/asdos.jpg', 
    description: 'Assisting students in practical programming classes, guiding them through problem solving and logic.',
    period: 'August 2024 - December 2024'
  },
  {
    title : 'Co-Faciliator Pionir Gadjah Mada 2024', 
    image : '/pionir.jpg',
    description : 'Facilitated campus orientation for 60+ new students, ensuring they felt welcomed and well-informed.',
    period : 'March 2024 - August 2024'
  },
  {
    title: 'Secretary – Himakom UGM',
    image: '/sekre.jpg',
    description: 'Responsible for documentation, meeting minutes, and administrative coordination within the organization.',
    period: 'March 2024 - August 2024'
  },
  {
    title: 'Master of Ceremony – Malam Apresiasi MIPA UGM',
    image: '/mc.jpg',
    description: 'Led the event flow smoothly, ensuring each session transitioned seamlessly and on schedule.',
    period: 'November 2023'
  }
];

const Experiences = () => (
  <div className="experiences-container">
    <h1>Personal Experiences</h1>
    <p>
      Throughout my university journey, I’ve been actively involved in both academic and organizational activities. Here are some of my experiences that have shaped my skills and knowledge!
    </p>

    <div className="experience-slider">
      {experienceList.map((exp, index) => (
        <div className="experience-card" key={index}>
          <img src={exp.image} alt={exp.title} />
          <h3>{exp.title}</h3>
          <h4>{exp.period}</h4>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Experiences;
