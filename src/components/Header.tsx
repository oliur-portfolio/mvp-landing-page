import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

interface navLinksProps {
    path: string;
    label: string;
}

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

    const navLinks: navLinksProps[] = [
        {
            path: "/",
            label: "Product",
        },
        {
            path: "/about",
            label: "About Us",
        },
    ];

    return (
        <header className={`header ${isNavToggle ? "mobile-menu" : ""}`}>
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="nav__logo">
                        <img src="/images/logo.png" alt="Logo" />
                    </Link>

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
                        {navLinks.map((item) => (
                            <li className="nav__link-item" key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "nav__link"
                                            : isActive
                                            ? "nav__link nav__link--active"
                                            : "nav__link"
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
