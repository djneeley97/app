import "./about.css";
import { useState } from "react";

function About() {
    const [contactVisible, setContactVisible] = useState(false);

    function showData() {
        setContactVisible(!contactVisible);
    }

    return (
        <div className="about page">
            <h1>Contact</h1>

            {contactVisible ? (
                <div className="box">
                    <p>to get in contact for bulk orders please contact us at the following
                    </p>
                    <p><b>abc123@gmail.com</b></p>
                    <p><b>(000)000-0000</b></p>
                </div>
            ) : null}

            <button onClick={showData} className="btn-primary btn-sm">View Contact Info</button>
        </div>
    );
}


export default About;