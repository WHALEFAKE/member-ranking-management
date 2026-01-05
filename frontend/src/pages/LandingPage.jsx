import NavBar from "../components/NavBar";
import AboutUsLanding from "../components/AboutUsLanding";
import IntroSectionLanding from "../components/IntroSectionLanding";
import GallerySection from "../components/GallerySection";
import Footer from "../components/footer";
import ArrowButton from "../components/ArrowButton";

const LandingPage = () => {
    return (
      <>
        <NavBar />
        <IntroSectionLanding /> 
        <AboutUsLanding />
        <GallerySection/>
        <Footer/>
        <ArrowButton/>
      </>
    )
}

export default LandingPage;