import './Logo.css';
import logo from './logo.png';

const Logo = function () {
    return <div>
        <img src={logo}/>
        <p>Picturest</p>
    </div>
}

export default Logo;