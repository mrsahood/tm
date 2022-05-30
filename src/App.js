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
import {  useState } from 'react';
import { SetPage } from './Components/Store'


function App() {
  const [col, setColor] = useState(true)

  
  return (
    <div className="App">
      <SetPage.Provider value={{col , setColor}} >
      <NavBar  />
      <SideBar data={setColor} />
      {/* <CreatePro /> */}
      { col ?  <Summary /> : <Project /> }
      
      {/* <ProTask /> */}
      {/* <ProjectTasks /> */}
      </SetPage.Provider>
      
    </div>
  );
}

export default App;
