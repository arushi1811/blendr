import "./ProfConfirmation.css"
import illus from "./assets/images/illus1.png"

const StuConfirmation = () => {
    return (
        <div className="prof-confirm">
            <div className="animation">
                <img src={illus} alt=""></img>
            </div>
            <div className="success-msg">
                <h2>You did it!</h2>
                <p>The team roster will be emailed to you shortly.</p>
                <h6>Thank you for using Blendo</h6>
            </div>
        </div>
    )
}

export default StuConfirmation
