import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { useState } from 'react';
import Navbar from "./components/Navbar"
import Teamform from './components/Teamform';
import StudentLogin from "./components/StudentLogin"
import Landing from "./components/Landing"
import ProfConfirmation from './components/ProfConfirmation';
import StudentForm from "./components/StudentForm"
import StuConfirmation from './components/StuConfirmation';


function App() {

  const [classcode, setClasscode] = useState("")
  const [grader, setGrader] = useState("")
  const [descr, setDescr] = useState("")
  const [hardskills, setHardskills] = useState("")
  const [softskills, setSoftskills] = useState("")
  const [students, setStudents] = useState("")

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing} ></Route>
          <Route path="/resources"></Route>
          <Route path="/create" render={() => <Teamform classcode={classcode} setClasscode={setClasscode}/>}></Route>
          <Route path="/enroll" render={()=> <StudentLogin classcode={classcode} setClasscode={setClasscode} setGrader={setGrader} setHardskills={setHardskills} setSoftskills={setSoftskills} setDescr={setDescr} setStudents={setStudents}/>}></Route>
          <Route path="/studentform" render={()=><StudentForm classcode={classcode} grader={grader} descr={descr} hardskills={hardskills} softskills={softskills} students={students}/>}></Route>
          <Route path="/success" render={()=> <ProfConfirmation classcode={classcode} />}></Route>
          <Route path="/stusuccess" component={StuConfirmation}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
