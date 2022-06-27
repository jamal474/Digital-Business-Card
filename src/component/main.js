import em_img from '../images/Mail.png'
import li_img from '../images/linkedin.png'


function main() {
    return (
    <div className="main">
        <h2>Laura Smith</h2>
        <h3>Frontend Developer</h3> 
        <h4>lawrasmith.website</h4> 
        <div className="btn">
            <button className= "email">
                <img src = {em_img} className="email-icon"/>
                <div className = "email-text">Email</div>
            </button>
            <button className= "linkedin">
                <img src = {li_img} className="linkedin-icon" />
                <div className= "linkedin-text">Linkedin</div>
            </button>
        </div>
        <div className="text-body">
            <h5>About</h5>
            <p>I am a frontend developer with a particular interest in
                 making things simple and automating daily tasks. I try
                  to keep up with security and best practices, and am
                   always lonnking for new things to learn. </p>
            <h5>Interests</h5>
            <p>Food expert. Music scholar. Reader. Internet fanatic. 
                Bacon buff. Entrepreneur. Travel geek. Pop culture
                 ninja. Coffee fanatic.</p>
        </div>
    </div>
    );
}

export default main;