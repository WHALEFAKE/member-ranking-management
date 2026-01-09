import NavBar from "../components/NavBar";
import AboutUsLanding from "../components/AboutUsLanding";
import IntroSectionLanding from "../components/IntroSectionLanding";
import GallerySection from "../components/GallerySection";
import EventLanding from "../components/EventLanding";
import Footer from "../components/Footer";
import ArrowButton from "../components/ArrowButton";
import FAQSections from "../components/FAQSections";

const LandingPage = () => {
    return (
      <>
        <>
      <NavBar onChatToggle={() => setIsChatBoxOpen((prev) => !prev)} />
      <IntroSectionLanding />
      <AboutUsLanding />
      <SloganPart />
      <MemberIntro />
      <EventLanding />
      <GallerySection />
      <FAQSections onChatToggle={() => setIsChatBoxOpen((prev) => !prev)} />
      <Footer />
      <ArrowButton />
      <AssistantChatbox isOpen={isChatBoxOpen} onClose={() => setIsChatBoxOpen(false)} />
    </>
      </>
    )
}

export default LandingPage;