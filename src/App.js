import './App.css';
import { Button,Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import Summary from './Components/Summary/Summary';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SideBar  /> */}
      <Summary />
      {/* <Container  /> */}
      {/* <Main /> */}
      
    </div>
  );
}

export default App;
