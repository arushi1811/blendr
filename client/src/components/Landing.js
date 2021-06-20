import "./Landing.css"
import illus from "./assets/images/illus1.png"
import av1 from "./assets/images/avatar1.png"
import av2 from "./assets/images/avatar2.png"

const Landing = () => {
    return (
        <div className="landing">
            <section className="box1">
                <div className="box1-txt">
                    <h2>
                    Challenge existing beliefs, create higher performing teams, and meet new people
                    </h2>
                    <p>
                    Blendo is a team formation randomizer that helps instructors to match people based on their qualities, traits, and skill sets to challenge existing beliefs, create higher performing teams, and meet new people.
                    </p>
                </div>
                <div className="box1-blob">
                    <img src={illus} alt=""></img>
                </div>
            </section>
            <section className="box2">
                <div className="box2-blob">
                <img src={av1} alt=""></img>
                </div>
                <div className="box2-txt">
                    <h2>
                        Who is this for?
                    </h2>
                    <p>
                    Targeted for educators to form student groups with diverse background and skill sets
                    </p>
                </div>
            </section>
            <section className="box2">
                <div className="box2-txt">
                    <h2>
                    Why?

                    </h2>
                    <p>
                    Promote more open mindedness within individuals
Create more innovative, higher performing groups
Help the next generation by creating a cultural shift
                    </p>
                </div>
                <div className="box2-blob">
                <img src={av2} alt=""></img>
                </div>
            </section>
            <section className="box3">
                <h2>Data Protection and Privacy</h2>
                <div className="box3-content">
                    <div className="b3-item">
                        <p>Automate the formation process to eliminate unconscious and implicit biases
Use a machine learning model that seeks to be non-judgmental.</p>
                    </div>
                    <div className="b3-item">
                        <p>Delete all personal data provided right after and no one will have access to them
Use one-time form because identity and personal beliefs are fluid!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
