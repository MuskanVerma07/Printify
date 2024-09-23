import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-4">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-1/2 p-4">
            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
            <p className="text-gray-600">- John Doe</p>
          </li>
          <li className="w-1/2 p-4">
            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
            <p className="text-gray-600">- Jane Doe</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;