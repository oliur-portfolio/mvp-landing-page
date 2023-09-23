const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="/" className="nav__logo">
                        <img src="/images/logo.png" alt="Logo" />
                    </a>

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
