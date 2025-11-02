
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Header
        onHomeClick={() => scrollToSection(homeRef)}
        onProductsClick={() => scrollToSection(productsRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main>
        <div ref={homeRef}>
          <Hero onExploreClick={() => scrollToSection(productsRef)} />
        </div>
        <div ref={productsRef}>
          <Products onQuoteClick={() => scrollToSection(contactRef)} />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
      </main>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
