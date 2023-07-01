import logo from "../img/logos/whiteLogo.png";

// scss
import "../styles/_Footer.scss";

function Footer() {
    return (
        <footer>
            <img className="logoFooter" src={logo} alt="logo-Kasa" />
            <p className="copyRighting">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
