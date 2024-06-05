import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import shoex from '../../Assets/Projects/Screenshot 2024-05-27 052836.png'
import crud from '../../Assets/Projects/Screenshot 2024-04-28 180854.png'
import netflix from '../../Assets/Projects/Screenshot 2024-04-28 193555.png'
import olx from '../../Assets/Projects/Screenshot 2024-04-28 175300.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoex}
              isBlog={false}
              title="Shoex"
              description="This is my first node.js project.Shoex is an E-commerce web application, especially for multibrand unisex sneakers where users can view products and buy them. It has almost every feature and function that are required for an E-commerce app."
              ghLink="https://github.com/savanfami/shoex_ecommerce"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="This project is a clone of the Netflix website, built with JavaScript, React, React-Vite, Tailwind CSS, Firebase, and API integration. It replicates the Netflix user experience, offering a responsive and dynamic platform for streaming content."
              ghLink="https://github.com/savanfami/netflix-Clone-react"

             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="Olx Clone"
              description="Implemented with React, Firebase, Tailwind CSS, and React-Vite, this OLX website clone offers a seamless user experience. Built with JavaScript, it replicates OLX's functionality, enabling users to buy and sell products effortlessly."
              ghLink="https://github.com/savanfami/Olx-clone-React"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="React Crud App"
              description="This CRUD application utilizes MongoDB, React, Vite, Tailwind CSS, Node.js, and Express. It features Cloudinary integration for profile image uploading. Users can create, read, update, and delete data seamlessly across the platform."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
