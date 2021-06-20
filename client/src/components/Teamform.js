import "./Teamform.css"

const Teamform = () => {
    return (
        <div className="container">
            <form>
                <h2>Create Teams</h2>
                <div className="form-item">
                    <h3>Email and Project Info</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="email">Instructor's Email</label>
                            <input type="text" id="email" />
                        </div>
                        <div className="input-item">
                            <label htmlFor="grader">Project grader</label>
                            <input type="text" id="grader" />
                        </div>
                        <div className="input-item">
                            <label htmlFor="description">Project description</label>
                            <input type="text" id="description" />
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <h3>Skills</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="hard-skills">Hard skills required for this project</label>
                            <p>Separate each skill with a comma</p>
                            <input type="text" id="hard-skills" />
                        </div>
                        <div className="input-item">
                            <label htmlFor="soft-skills">Soft skills required for this project</label>
                            <p>Separate each skill with a comma</p>
                            <input type="text" id="soft-skills" />
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <h3>Headcount</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="total">Total number of students</label>
                            <p>How many students are enrolled in your class?</p>
                            <input type="number" id="total" />
                        </div>
                        <div className="input-item" id="special-input">
                            <div className="input-item">
                            <label htmlFor="team-count">Number of people per team</label>
                            <input type="number" id="team-count" />
                            </div>
                            <h3>OR</h3>
                            <div className="input-item">
                            <label htmlFor="team-number">Number of teams</label>
                            <input type="number" id="team-number" />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit">Generate Blendo Class Code</button>
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
