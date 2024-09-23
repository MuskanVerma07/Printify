import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Printify</h1>
        <p className="text-2xl">Create and sell custom products with ease</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;