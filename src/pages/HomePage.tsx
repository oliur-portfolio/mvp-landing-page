import Activities from "../components/Activities";
import DownloadApp from "../components/DownloadApp";
import Growth from "../components/Growth";
import Hero from "../components/Hero";
import Progress from "../components/Progress";
import ShareQR from "../components/ShareQR";

const HomePage = () => {
    return (
        <main>
            <Hero />
            <Activities />
            <ShareQR />
            <Growth />
            <Progress />
            <DownloadApp />
        </main>
    );
};

export default HomePage;
