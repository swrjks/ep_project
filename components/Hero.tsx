import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-24 md:py-40" 
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1060')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">Pure Water, Healthier Life.</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Welcome to Sri Sai Ganesh Marketing, your trusted partner for advanced water purification solutions. We provide top-quality purifiers and Aquaguards to ensure your family's health and safety.
        </p>
        <button 
          onClick={onExploreClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Explore Our Products
        </button>
      </div>
    </section>
  );
};

export default Hero;