import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import CV from "./components/pages/CV";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import project1 from "./components/img/project1.jpg";
import project2 from "./components/img/project2.jpg";
import project3 from "./components/img/project3.jpg";
import dlcv from "./assets/CV_NataliaWiman.pdf";
import styled from "styled-components";

class App extends Component {
  state = {
    title: "Natalia Wiman",
    navLinks: [
      { title: "Home", path: "/", id: 1 },
      { title: "Projects", path: "/projects", id: 2 },
      { title: "CV", path: "/resume", id: 3 },
      { title: "About me", path: "/about", id: 4 },
      { title: "Contact", path: "/contact", id: 5 },
    ],
    socialLinks: [
      {
        title: "GitHub",
        icon: <i className="fab fa-github"></i>,
        path: "https://github.com/NataliaWiman",
        id: 1,
      },
      {
        title: "LinkedIn",
        icon: <i className="fab fa-linkedin"></i>,
        path: "https://www.linkedin.com/in/natalia-wiman-178b68189/",
        id: 2,
      },
    ],
    home: {
      greeting: "Hi! I'm Natalia",
      description: "A Front-End Developer from Stockholm.",
      button: "View Projects",
    },
    about: {
      title: "About me",
      description:
        "Hi. I'm Natalia. I live in Stockholm and have been studying Front-end Development in since fall 2019. It can be challenging at times but the most inspiring thing for me is to look back and realise how much I’ve learned and how much there is yet to explore. Having fun in the process is a pretty good bonus!",
    },
    skills: [
      { title: "HTML5", icon: <i className="fab fa-html5"></i>, id: 1 },
      { title: "CSS3", icon: <i className="fab fa-css3-alt"></i>, id: 2 },
      {
        title: "JavaScript",
        icon: <i className="fab fa-js-square"></i>,
        id: 3,
      },
      { title: "React", icon: <i className="fab fa-react"></i>, id: 4 },
    ],
    projects: {
      title: "My Projects",
      description: "Here are a few of my projects",
    },
    cv: {
      title: "My CV",
      description: "Here you can download my CV",
      dl: (
        <a href={dlcv} target="_blanc">
          Download CV
        </a>
      ),
    },
    contact: {
      title: "Get in touch",
      description: "Contact me if there's anything you are wondering",
    },
    projectList: [
      {
        title: "Quire",
        description:
          "Quire is an online note taking application that lets you create, view, and manage notes. This web app is fully responsive.",
        type: "Web Application",
        img: (
          <img className="project-item_img" src={project2} alt={this.title} />
        ),
        url: "http://quire-team-staple.surge.sh",
        code: "https://github.com/AD757/fe19tp1_TeamStaple",
        role:
          "As a memeber of a team of five students I was resposible for design, mark-up, and did most of the application's functionality.",
        technologies: "HTML, CSS, JavaScript, QuillJS, Local Storage",
        id: 1,
      },
      {
        title: "Coffee Bean",
        description:
          "A responsive website for an imaginary coffee shop called Coffee Bean.",
        type: "Website",
        img: (
          <img className="project-item_img" src={project1} alt={this.title} />
        ),
        url: "http://fe19ip1-coffee-bean.surge.sh",
        code: "https://github.com/NataliaWiman/fe19ip1_coffeebean",
        role:
          "Design and create a responsive website with a form from scratch.",
        technologies: "HTML, CSS, JavaScript",
        id: 2,
      },
    ],
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Container>
            <Navigation navLinks={this.state.navLinks} />
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  home={this.state.home}
                  socialLinks={this.state.socialLinks}
                />
              )}
            />
            <Route
              path="/about"
              component={() => (
                <About
                  about={this.state.about}
                  skillsList={this.state.skills}
                />
              )}
            />
            <Route
              path="/projects"
              component={() => (
                <Projects
                  projects={this.state.projects}
                  projectList={this.state.projectList}
                  socialLinks={this.state.socialLinks}
                />
              )}
            />
            <Route path="/resume" component={() => <CV cv={this.state.cv} />} />
            <Route
              path="/contact"
              component={() => <Contact contact={this.state.contact} />}
            />
            <Footer socialLinks={this.state.socialLinks} />
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  margin: 0 auto;
`;

export default App;
