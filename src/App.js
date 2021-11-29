import './App.css';
import Card from "./component/Card/Card"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <div>
            <span className="me"> Kushagra </span>
          </div>
          <div id="linkContainer">
            <a href="https://github.com/Kushagra1974">GitHub</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact</a>
            <a href="#resume">Resume</a>
          </div>
        </nav>
        <div id="about">
          <p>
            Hello, I am Kushagra a React developer and a Computer Enthusiast.
          </p>
        </div>
        <div id="projects">
          <h1 id="projectheading">Projects</h1>
          <div id="cardcontainer">
            <Card sr="https://elegant-roentgen-87eeb8.netlify.app/" >
              <h1>Algorithm Visualizer</h1>
              <img src="viz.png" alt="img" />\
              <p>A React app that visualize sorting algorithm
                Merge Sort ,Quick Sort ,Select Sort and
                Bubble Sort
              </p>
            </Card>
            <Card sr="https://vigorous-mirzakhani-fca761.netlify.app/">
              <h1>Covid Stats</h1>
              <img src="covid.png" alt="img" />
              <p>
                A application to fetch real time information
                form covide API and tells about active
                cases, total deaths, total recovered from
                covid in country it uses React and graph js
                to display stats
              </p>
            </Card>
          </div>
        </div>
        <div id="contact">
          <h1>Contact me at</h1>
          <p>
            Email : kamle.kush2002@gmail.com
          </p>
          <a></a>
          <a href="https://www.linkedin.com/in/kushagra-kamle-50737821b/">Linkedin</a>
        </div>
        <div id="resume">
          <h1>Resume</h1>
          <embed src="Resume.pdf" width="1000px" height="800px" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
