import "./StudentForm.css"
import "./Teamform.css"

const StudentForm = () => {
    return (
        <div className="container">
            <form>
                <div className="form-item">
                    <h2>Securely add your information</h2>
                    <div className="form-input">
                        <div className="input-item">
                            <h3>Project Grader</h3>
                            <p>James Jackson</p>
                        </div>
                        <div className="input-item">
                            <h3>Project Description</h3>
                            <p>Create a brochure blah</p>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <h3>Basic Info</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="email-student">Email *</label>
                            <input type="text" id="email-student" />
                        </div>
                        <div className="input-item">
                            <label htmlFor="firstname">First Name *</label>
                            <input type="text" id="firstname" />
                        </div>
                        <div className="input-item">
                            <label htmlFor="lastname">Last Name *</label>
                            <input type="text" id="lastname" />
                        </div>
                        <div className="input-item">
                            <label htmlFor="race">Race</label>
                            <input type="text" id="race"/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="ethnicity">Ethnicity</label>
                            <input type="text" id="ethnicity"/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="gender">Gender Identity</label>
                            <input type="text" id="gender"/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="gpa">GPA</label>
                            <input type="text" id="gpa"/>
                        </div>
                    </div>
                </div>
                <div className="form-item">
                    <h3>Skills and Interests</h3>
                    <div className="form-input">
                        <div className="input-item">
                            <label htmlFor="hardskills">Hard Skills</label>
                            <p>What do I enjoy? What am I good at? What can I do?</p>
                            <input type="text" id="hardskills"/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="softskills">Soft Skills</label>
                            <input type="text" id="softskills" />
                        </div>
                    </div>
                </div>
                <button type="submit">Join Class</button>
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
