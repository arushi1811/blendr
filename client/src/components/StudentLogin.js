import "./StudentLogin.css"
import { useState } from "react"
import axios from "axios"
import ani from "./assets/images/ani.gif"
import { useHistory } from "react-router-dom"

const StudentLogin = ({setClasscode, setGrader, setDescr, setSoftskills, setHardskills, setStudents}) => {
    let history=useHistory();

    const [code, setCode] = useState("")   
    
    const submitHandle = (e) => {
        e.preventDefault();
        setClasscode(code);
        axios.get(`http://localhost:8000/projectdetails/${code}`)
        .then(res=> {
            setGrader(res.data.grader)
            setDescr(res.data.description)
            setSoftskills(res.data.softskills)
            setHardskills(res.data.hardskills)
            setStudents(res.data.students)
            history.push("/studentform")
        })
        
    }

    return (
        <div className="student-login">
            <div className="welcome">
                <h2>Welcome!</h2>
                <form >
                    <label htmlFor="class-code">Enter class code</label>
                    <input type="text" value={code} onChange={e=>setCode(e.target.value)}/>
                    <button type="submit" onClick={e=>submitHandle(e)}>Start</button>
                </form>
            </div>
            <div className="animation">
                <img alt="" src={ani}></img>
            </div>
        </div>
    )
}

export default StudentLogin
