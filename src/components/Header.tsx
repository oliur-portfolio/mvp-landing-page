import { useState } from "react";

const Header = () => {
    const [isNavToggle, setIsNavToggle] = useState(false);

    const handleToggleNav = () => {
        setIsNavToggle((toggle) => !toggle);

        if (isNavToggle) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    return (
        <header className={`header ${isNavToggle ? "mobile-menu" : ""}`}>
            <div className="container">
                <nav className="nav">
                    <a href="/" className="nav__logo">
                        <img src="/images/logo.png" alt="Logo" />
                    </a>

                    <button
                        className={`navbar-toggler ${
                            isNavToggle ? "change" : ""
                        }`}
                        onClick={handleToggleNav}
                    >
                        <div className="toggler-btn">
                            <span className="bar bar1"></span>
                            <span className="bar bar2"></span>
                            <span className="bar bar3"></span>
                        </div>
                    </button>

                    <ul className="nav__links">
                        <li className="nav__link-item">
                            <a href="/" className="nav__link nav__link--active">
                                Product
                            </a>
                        </li>

                        <li className="nav__link-item">
                            <a href="/" className="nav__link">
                                About Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
