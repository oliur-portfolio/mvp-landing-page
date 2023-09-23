const Hero = () => {
    return (
        <section className="hero-area">
            <div className="hero-circle"></div>

            <div className="container">
                <div className="hero">
                    <div className="hero__content">
                        <form action="" className="activity-code">
                            <p>Have an activity code?</p>
                            <div className="activity-code__wrapper">
                                <input
                                    className="activity-code__input"
                                    type="text"
                                    placeholder="Enter code here"
                                />

                                <button
                                    type="submit"
                                    className="activity-code__btn"
                                >
                                    GO
                                </button>
                            </div>
                        </form>

                        <h1>
                            Improve your skills{" "}
                            <span>with real actionable feedback</span>
                        </h1>

                        <button className="custom-btn custom-btn--center">
                            Download App
                        </button>

                        <img
                            className="hero__image"
                            src="/images/hero.png"
                            alt="hero"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
