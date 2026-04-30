import Reveal from './components/Reveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Reform from './components/Reform';
import Flow from './components/Flow';
import Voice from './components/Voice';
import Company from './components/Company';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Reveal />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Reform />
      <Flow />
      <Voice />
      <Company />
      <Contact />
      <Footer />
    </>
  );
}
