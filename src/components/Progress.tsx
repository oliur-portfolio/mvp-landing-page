const Progress = () => {
    return (
        <section className="basic-area progress-area">
            <div className="container">
                <div className="basic-flex basic-flex--reverse progress">
                    <img
                        className="basic-flex__image"
                        src="/images/progress.jpg"
                        alt="progress"
                    />

                    <div className="basic-flex__content">
                        <h2>
                            Keep track of your progress over time and unlock new
                            levels as you get better.
                        </h2>

                        <h2>
                            New levels, unlock more feedback questions which
                            cover advanced aspects of the craft
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Progress;
