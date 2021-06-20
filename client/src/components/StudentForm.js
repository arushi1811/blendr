import "./Teamform.css"
import { useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom"

const StudentForm = ({classcode, grader, descr, softskills, hardskills, students}) => {

    let history = useHistory();

    const [studentEmail, setEmail] = useState("")
    const [firstName, setFirst] = useState("")
    const [lastName, setLast] = useState("")
    const [race, setRace] = useState(0)
    const [language, setLanguage] = useState(0)
    const [gender, setGender] = useState(0)
    const [gpa, setGpa] = useState(0)
    const [hard, setHard] = useState(0)
    const [soft, setSoft] = useState(0)

    const submitHandle = (e) => {
        e.preventDefault();
        const newstudent = {
            "email":studentEmail,
            "firstname":firstName,
            "lastname":lastName,
            "race":race,
            "language":language,
            "gender":gender,
            "gpa":gpa,
            "hard":hard,
            "soft":soft
        }
        let newlist = {...students, newstudent}
        console.log(newlist)
        axios.patch(`http://localhost:8000/student/${classcode}`,newlist)
        .then(res=>{
            console.log(res.data)
        })
        history.push("/stusuccess")
    }

    return (
        <div className="container">
            <form>
                <div className="form-item">
                    <h2>Securely add your information</h2>
                    <div className="form-input">
                        <div className="input-item">
                            <h3>Project Grader</h3>
                            <p className="specialp">{grader}</p>
                        </div>
                        <div className="input-item">
                            <h3>Project Description</h3>
                            <p className="specialp">{descr}</p>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <h3>Basic Info</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="email-student">Email *</label>
                            <input type="text" id="email-student" value={studentEmail} onChange={e=> setEmail(e.target.value)}/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="firstname">First Name *</label>
                            <input type="text" id="firstname" value={firstName} onChange={e=> setFirst(e.target.value)}/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="lastname">Last Name *</label>
                            <input type="text" id="lastname" value={lastName} onChange={e=>setLast(e.target.value)}/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="race">Race</label>
                            <select name="race" id="race" onChange={e=> setRace(e.target.value)}>
                                <option value="1">White</option>
                                <option value="2">African American</option>
                                <option value="3">American Indian or Alaska Native</option>
                                <option value="4">Asian</option>
                                <option value="5">Native Hawaiian or Other Pacific Islander</option>
                                <option value="6">Multiracial</option>
                            </select>
                        </div>
                        <div className="input-item">
                            <label htmlFor="language">Language</label>
                            <select name="language" id="ethnicity" onChange={e=> setLanguage(e.target.value)}>
                                <option value="1">Speak One Language</option>
                                <option value="2">Bilingual</option>
                                <option value="3">Speak more than two languages</option>
                            </select>
                        </div>
                        <div className="input-item">
                            <label htmlFor="gender">Gender Identity</label>
                            <select name="gender" id="gender" onChange={e=> setGender(e.target.value)}>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Trans</option>
                                <option value="4">Non-Binary</option>
                            </select>
                        </div>
                        <div className="input-item">
                            <label htmlFor="gpa">GPA</label>
                            <select name="gpa" id="gpa" onChange={e=> setGpa(e.target.value)}>
                                <option value="1">&gt;3.7</option>
                                <option value="2">3.3-3.7</option>
                                <option value="3">3.0-3.3</option>
                                <option value="4">2.7-3.0</option>
                                <option value="5">2.0-2.7</option>
                                <option value="6">&lt; 2.0</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <h3>Skills and Interests</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="hardskills">Hard Skills</label>
                            <p>What do I enjoy? What am I good at? What can I do?</p>
                            <select name="hard" id="hardskills" onChange={e=> setHard(e.target.value)}>
                                {hardskills.map((item,idx)=> {
                                    return (<option key={idx} value={idx+1}>{item}</option>)
                                })}
                            </select>
                        </div>
                        <div className="input-item">
                            <label htmlFor="softskills">Soft Skills</label>
                            <select name="soft" id="softskills" onChange={e=> setSoft(e.target.value)}>
                            {softskills.map((item,idx)=> {
                                    return (<option key={idx} value={idx+1}>{item}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={e=> submitHandle(e)}>Join Class</button>
                <p>We'll email you the name of your team and information about your teammates shortly.</p>
            </form>
            <div className="form-item footer-item">
                <div className="form-footer-item">
                    <h3>Learn about our ML Algorithm for Team Distribution</h3>
                </div>   
                <div className="form-footer-item">
                <h5>We minimize bias by using an unsupervised learning model. This ensures that human bias can not creep in. While distributing teams based on diversity, skills, and interests is our priority, we still incorporate randomness in our process.</h5>
                </div>   
                <div className="form-footer-item">
                <h5>We take every step to protect your privacy. We delete all student data except student's name and team assignment to ensure privacy. </h5>
                </div>   
            </div>
        </div>
    )
}

export default StudentForm
