import './App.css';
import Navbar from "./components/Navbar"
import Teamform from './components/Teamform';
import StudentLogin from "./components/StudentLogin"
import Landing from "./components/Landing"
import ProfConfirmation from './components/ProfConfirmation';
import StudentForm from "./components/StudentForm"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StudentForm/>
    </div>
  );
}

export default App;
