import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Covid-19 Image Classifier',
    image : '/covid.png',
    description: 'This project is a CNN-based classifier to detect COVID-19 from chest X-ray images. This is a project that I made fo my computer vision assignment. Making this project with Google Colab, OpenCV, and TensorFlow. ',
    githubLink: 'https://github.com/NasyaPutriRaudhah/Covid19-Classification',
    liveLink: 'https://drive.google.com/file/d/1qCnU9ezUp66j6ogsqUw6m3jJVo8Mo3tz/view?usp=drive_link', 
  },
  {
    title: 'Patient Queue Prediction using Gradient Boosting',
    image: '/queue.png',
    description: 'This project was developed for my first GEMASTIK competition in collaboration with my team and academic supervisor. It focuses on predicting patient waiting times before being called to see the doctor using the Gradient Boosting algorithm. We built the model using Python, with Pandas for data processing and Scikit-learn for machine learning implementation',
    githubLink: 'https://drive.google.com/file/d/1IgxllViQM8arbHSesbLRCtuCkfJAHzRF/view',
    liveLink: 'https://drive.google.com/file/d/1IgxllViQM8arbHSesbLRCtuCkfJAHzRF/view',
  },
  {
    title: 'Face Recoginition',
    image : '/ss.png',
    description: 'This project is made to fulfill the assignment of my computer vision course. This is a face recognition system that can detect faces in images and videos as well as recognizing through webcam. This project is made using Python, OpenCV, and TensorFlow.',
    githubLink: 'https://github.com/NasyaPutriRaudhah/Face-Recognition',
    liveLink: 'https://github.com/NasyaPutriRaudhah/Face-Recognition',
  },
   {
    title: 'First Personal Website',
    image: '/first.png',
    description: 'This is my first personal website that made me accepted to RISTEK Sister in Tech that held ny the University of Indonesia. This website is made using HTML, CSS, and JavaScript. This website is a simple personal website that contains my profile and other of my personal things.',
    githubLink: 'https://github.com/NasyaPutriRaudhah/First-Personal-Project',
    liveLink: 'https://64af9c55c4317326c387e192--fanciful-clafoutis-ea8e38.netlify.app/'
  },
  {
    title: 'First Personal Portofolio Website',
    image: '/porto.png',
    description: 'This is my first personal portofolio website that I made to apply to KOMATIK (Komunitas Mahasiswa Teknologi Informasi dan Komunikasi UGM)',
    githubLink: 'https://github.com/username/covid19-classifier',
    liveLink: 'https://nasya-personalweb.netlify.app/', 
  },
    {
    title: 'Length of Stay Prediction',
    description: 'This is a project that I made for Datathon Competition 2025. This project is comparing some machine learning models to predict the length of stay of patients in the hospital. This project successfully reached 0,14 in RMSE with R2 score 0,97 using LightGBM and hyperparameter tuning using GridSearchCV.',
    image: '/hospital.png',
    githubLink: 'https://github.com/NasyaPutriRaudhah/Datathon',
    liveLink: 'https://github.com/NasyaPutriRaudhah/Datathon', 
  }
];

const techStack = [
  { logo: '/mysql.png' },
  { logo: '/cpp.png' },
  { logo: '/python.png' },
  { logo: '/java.png'},
  { logo: '/react.png' },
  { logo: '/jupyter.png' },
];

const Projects = () => (
  <div className="projects-section">
    <h1>My Projects</h1>
    <p>Here are some of the projects I've worked on:</p>
    
    <div className="projects-carousel">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
            {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="button-group">
            <a
              href={project.liveLink}
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Project
            </a>
            <a
              href={project.githubLink}
              className="project-button github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>

    <h2>Tech Stack</h2>
    <div className="tech-stack-carousel">
      {techStack.map((tech, index) => (
        <div className="tech-item-large" key={index}>
          <img src={tech.logo} alt={tech.name} />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
