import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-white py-4">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">Features</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-1/3 p-4">
            <i className="fas fa-lock"></i>
            <h3 className="text-2xl font-bold">Secure Payments</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li className="w-1/3 p-4">
            <i className="fas fa-truck"></i>
            <h3 className="text-2xl font-bold">Fast Shipping</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li className="w-1/3 p-4">
            <i className="fas fa-life-ring"></i>
            <h3 className="text-2xl font-bold">24/7 Support</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;