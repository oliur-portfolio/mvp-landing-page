import { Link } from "react-router-dom";

interface footerLinksProps {
    path: string;
    label: string;
}

const Footer = () => {
    const legalLinks: footerLinksProps[] = [
        {
            path: "/terms",
            label: "Terms of Use",
        },
        {
            path: "/privacy",
            label: "Privacy Policy",
        },
    ];

    const companyLinks: footerLinksProps[] = [
        {
            path: "/contact",
            label: "Contact Us",
        },
        {
            path: "/about",
            label: "About Us",
        },
        {
            path: "/careers",
            label: "Careers",
        },
    ];

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
                                    {legalLinks.map((item) => (
                                        <li key={item.path}>
                                            <Link
                                                to={item.path}
                                                className="footer__nav-link"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="footer__nav">
                                <h5>Company</h5>

                                <ul className="footer__nav-list">
                                    {companyLinks.map((item) => (
                                        <li key={item.path}>
                                            <Link
                                                to={item.path}
                                                className="footer__nav-link"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
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
