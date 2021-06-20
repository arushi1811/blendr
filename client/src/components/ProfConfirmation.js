import "./ProfConfirmation.css"

const ProfConfirmation = () => {
    return (
        <div className="prof-confirm">
            <div className="animation"></div>
            <div className="success-msg">
                <h2>Success!</h2>
                <p>The team roster will be emailed to you shortly.</p>
                <h6>Your class code</h6>
                <h3>3519840</h3>
                <button>Paste to clipboard</button>
            </div>
        </div>
    )
}

export default ProfConfirmation
