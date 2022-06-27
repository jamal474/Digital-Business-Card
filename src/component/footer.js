import twitter from '../images/Twitter.png'
import facebook from '../images/Facebook.png'
import instagram from '../images/Instagram.png'
import github from '../images/GitHub.png'

function footer() {
    return (
    <div className="footer">
        <a href="https://twitter.com" target = "_blank"><img src = {twitter}/></a>
        <a href="https://facebook.com" target = "_blank"><img src = {facebook}/></a>
        <a href="https://instagram.com" target = "_blank"><img src = {instagram}/></a>
        <a href="https://github.com" target = "_blank"><img src = {github}/></a>
    </div>
    );
}

export default footer;