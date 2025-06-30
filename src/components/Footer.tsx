import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/hizku" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/hizak/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Thank you for visiting <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer"></a> </p>
    </footer>
  );
}

export default Footer;