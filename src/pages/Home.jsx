import BannerImage from '../components/BannerImage';
import homeBackground from "../assets/images/homePageBackground.png"
import Gallery from '../components/Gallery';

const Home = () => {

    return (
        <div>
            <BannerImage background={homeBackground} text="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    );
};

export default Home;