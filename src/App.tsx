import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import VideoSection from './components/VideoSection/VideoSection';
import Testimonials from './components/Testimonials/Testimonials';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VideoSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
