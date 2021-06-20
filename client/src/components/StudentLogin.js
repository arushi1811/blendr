import "./StudentLogin.css"

const StudentLogin = () => {
    return (
        <div className="student-login">
            <div className="welcome">
                <h2>Welcome!</h2>
                <form >
                    <label htmlFor="class-code">Enter class code</label>
                    <input type="text"/>
                    <button type="submit">Start</button>
                </form>
            </div>
            <div className="animation">
            </div>
        </div>
    )
}

export default StudentLogin
