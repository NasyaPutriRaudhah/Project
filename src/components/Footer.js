import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer style={{
    backgroundColor: '#FFE2EC',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    marginTop: '40px'
  }}>
    <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Connect with me</p>

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      fontSize: '24px',
      marginBottom: '10px'
    }}>
      <a href="https://github.com/NasyaPutriRaudhah" target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
        <FaGithub />
      </a>
      <a href="https://instagram.com/nasyaputrird" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C' }}>
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/nasya-putri-raudhah-038411213/" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
        <FaLinkedin />
      </a>
      <a href="mailto:nasyaputriraudhahdahlan@mail.ugm.ac.id" style={{ color: '#444' }}>
        <FaEnvelope />
      </a>
    </div>

    <p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
      © 2025 Nasya Putri Raudhah. All rights reserved.
    </p>
  </footer>
);

export default Footer;
