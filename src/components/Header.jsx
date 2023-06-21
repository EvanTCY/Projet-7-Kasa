import Nav from "./Nav";

import "../styles/_Header.scss";
import logo from "../img/logos/logomaincolor.png";

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
