const ShareQR = () => {
    return (
        <section className="basic-area share-qr-area">
            <div className="container">
                <div className="basic-flex basic-flex--reverse share-qr">
                    <img
                        className="basic-flex__image"
                        src="/images/share-qr.jpg"
                        alt="share QR"
                    />

                    <div className="basic-flex__content">
                        <h2>Get feedback quick with easy rating questions</h2>

                        <h2>
                            Share the QR code or the short link with your peers
                            or audience to get feedback
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShareQR;
