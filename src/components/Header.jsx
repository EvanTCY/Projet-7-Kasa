import logo from "../img/logos/mainColorLogo.png";

// scss
import "../styles/_Header.scss";

// components
import Nav from "./Nav";

function Header() {
    return (
        <header>
            <div className="logoContainer">
                <img
                    className="logoContainer__logoHeader"
                    src={logo}
                    alt="logo-Kasa"
                />
            </div>
            <Nav />
        </header>
    );
}

export default Header;
