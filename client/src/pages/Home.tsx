import Hero from '../components/Hero';
import TechnicalCapabilities from '../components/TechnicalCapabilities';
import PrecisionProtocol from '../components/PrecisionProtocol';
import SelectedWork from '../components/SelectedWork';
import Advantage from '../components/Advantage';
// import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <TechnicalCapabilities />
            <PrecisionProtocol />
            <SelectedWork />
            <Advantage />
            {/* <Testimonials /> */}
            <CTA />
        </>
    );
};

export default Home;
