import "./ProfConfirmation.css"
import illus from "./assets/images/illus1.png"

const ProfConfirmation = ({classcode}) => {
    return (
        <div className="prof-confirm">
            <div className="animation">
                <img alt="" src={illus}></img>
            </div>
            <div className="success-msg">
                <h2>Success!</h2>
                <p>The team roster will be emailed to you shortly.</p>
                <h6>Your class code</h6>
                <h3>{classcode}</h3>
                <button onClick={() => {navigator.clipboard.writeText(classcode)}}>Copy to Clipboard</button>
            </div>
        </div>
    )
}

export default ProfConfirmation
