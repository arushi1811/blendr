import "./Teamform.css"
import {useState} from "react"
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Teamform = ({setClasscode, classcode}) => {
    let history = useHistory();
    const [email, setEmail] = useState("")
    const [grader, setGrader] = useState("")
    const [descr, setDescr] = useState("")
    const [hard, setHard] = useState("")
    const [soft, setSoft] = useState("")
    const [total, setTotal] = useState("")
    const [members, setMembers] = useState("")
    const [teams, setTeams] = useState("")

    const btnhandler = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            alert("Please enter a valid email address.")
        }

        else if (members && teams) {
            alert("Please enter either team members OR number of teams")
        }

        else if (!email||!grader||!descr||!hard||!soft||!total) {
            alert("Please fill all mandatory fields to proceed.")
        }

        else if (!members && !teams) {
            alert("Please enter either team members OR number of teams")
        }

        else {
            axios.get("http://localhost:8000/classcode")
            .then(res=> {
                setClasscode(res.data)
                const prof = {
                    "email":email,
                    "grader":grader,
                    "descr":descr,
                    "hard":hard.split(","),
                    "soft": soft.split(","),
                    "total":Number(total),
                    "members":Number(members),
                    "teams": Number(teams),
                    "classcode":res.data
                }
                console.log(prof)
                axios.post("http://localhost:8000/addprof",prof).then(res=>{
                    console.log(res)
                    history.push("/success")
                })
            })
        }



    }

    return (
        <div className="container">
            <form>
                <h2>Create Teams</h2>
                <div className="form-item">
                    <h3>Email and Project Info</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="email">Instructor's Email *</label>
                            <input type="text" id="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="grader">Project grader *</label>
                            <input type="text" id="grader" value={grader} onChange={e=> setGrader(e.target.value)}/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="description">Project description *</label>
                            <input type="text" id="description" value={descr} onChange={e=> setDescr(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <h3>Skills</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="hard-skills">Hard skills required for this project *</label>
                            <p>Separate each skill with a comma</p>
                            <input type="text" id="hard-skills" value={hard} onChange={e=> setHard(e.target.value)} />
                        </div>
                        <div className="input-item">
                            <label htmlFor="soft-skills">Soft skills required for this project *</label>
                            <p>Separate each skill with a comma</p>
                            <input type="text" id="soft-skills" value={soft} onChange={e=> setSoft(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <h3>Headcount</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="total">Total number of students *</label>
                            <p>How many students are enrolled in your class?</p>
                            <input type="number" id="total" value={total} onChange={e=> setTotal(e.target.value)}/>
                        </div>
                        <div className="input-item" id="special-input">
                            <div className="input-item">
                            <label htmlFor="team-count">Number of people per team</label>
                            <input type="number" id="team-count" value={members} onChange={e=> setMembers(e.target.value)}/>
                            </div>
                            <h3>OR</h3>
                            <div className="input-item">
                            <label htmlFor="team-number">Number of teams</label>
                            <input type="number" id="team-number" value={teams} onChange={e=> setTeams(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={e=>btnhandler(e)}>Generate Blendo Class Code</button>
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

export default Teamform
