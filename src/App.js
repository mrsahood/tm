import './App.css';
import { Button,Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import Summary from './Components/Summary/Summary';
import Project from './Components/Project/Project';
import CreatePro from './Components/CreatePro/CreatePro';
import ProTask from './Components/ProTasks/ProTask';
import ProjectTasks from './Components/ProjectTasks/ProjectTasks';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar  />
      {/* <Summary /> */}
      {/* <Project /> */}
      {/* <ProTask /> */}
      <ProjectTasks />
      
    </div>
  );
}

export default App;
