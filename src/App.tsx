import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function App() {
  // Custom scroll offset handler to respect the sticky header height
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const header = document.getElementById("site-header");
      const offset = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Set page title and meta metadata on load for SEO
  useEffect(() => {
    document.title = "Alessandro Freccia - Síndico Profissional em Balneário Camboriú e Região";
    
    // Create or update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Alessandro Freccia - Gestão profissional de condomínios em Balneário Camboriú e SC. Economia, transparência, valorização patrimonial e excelência administrativa.'
    );
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-navy-600 selection:text-white" id="main-application-frame">
      {/* Header / Sticky Navigation bar */}
      <Header onScrollTo={scrollToSection} />

      {/* Hero section */}
      <Hero onScrollTo={scrollToSection} />

      {/* Main sections flow */}
      <main id="main-content-flow">
        {/* About Trajectory */}
        <About />

        {/* Services Showcase */}
        <Services />

        {/* Why Us & Custom Animated SVG Charts */}
        <WhyUs />

        {/* Process Timeline */}
        <Timeline />

        {/* Interactive Activities Gallery */}
        <Gallery />

        {/* Accordion FAQ with Search Filter */}
        <FAQ />

        {/* Contact proposal form & coverage map */}
        <Contact />
      </main>

      {/* Floating Sticky Conversion Tool */}
      <WhatsAppButton />

      {/* Footer & SEO Keywords Indexing */}
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}
