const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer">
                    <a href="#" className="footer__logo">
                        <img src="/images/footer-logo.png" alt="footer logo" />
                    </a>

                    <div className="footer__right">
                        <div className="footer__nav-area">
                            <div className="footer__nav">
                                <h5>Legal</h5>

                                <ul className="footer__nav-list">
                                    <li>
                                        <a
                                            href="#"
                                            className="footer__nav-link"
                                        >
                                            Terms of Use
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="footer__nav-link"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__nav">
                                <h5>Company</h5>

                                <ul className="footer__nav-list">
                                    <li>
                                        <a
                                            href="#"
                                            className="footer__nav-link"
                                        >
                                            Contact Us
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="footer__nav-link"
                                        >
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="footer__nav-link"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className="social-list">
                            <li>
                                <a href="#">
                                    <img
                                        src="/images/facebook.svg"
                                        alt="facebook"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/images/twitter.svg"
                                        alt="twitter"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/images/google.svg"
                                        alt="google"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-rights">
                <p>All rights reserved © 2022 App Com Pvt Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;
