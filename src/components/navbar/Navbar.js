import Logo from '../logo/Logo';
import Button from '../button/Button';
import Usermenu from '../usermenu/Usermenu';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <Logo/>
            <Button text='Home!!!!!!'/>
            <Usermenu/>
        </>
    )
}

export default Navbar;