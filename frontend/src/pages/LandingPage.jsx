import NavBar from "../components/NavBar";
import AboutUsLanding from "../components/AboutUsLanding";
import IntroSectionLanding from "../components/IntroSectionLanding";
import GallerySection from "../components/GallerySection";
import EventLanding from "../components/EventLanding";
import Footer from "../components/Footer";
import ArrowButton from "../components/ArrowButton";
import FAQSections from "../components/FAQSections";
import MemberIntro from "../components/MemberIntro";

const LandingPage = () => {
    return (
        <>
            <NavBar />
            <IntroSectionLanding />
            <AboutUsLanding />
            <MemberIntro />
            <EventLanding />
            <GallerySection />
            <FAQSections />
            <Footer />
            <ArrowButton />
        </>
    );
};

export default LandingPage;
