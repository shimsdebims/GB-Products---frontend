import React from 'react';
import { Link } from 'react-router-dom';
import FarmStory from '../components/farm/FarmStory';

function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="hero text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Gabriels Products</h1>
        <p className="text-xl mb-8">
          Sustainable Agriculture from Burundi's Finest Farm
        </p>
        <div className="cta-buttons space-x-4">
          <Link 
            to="/products" 
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            View Our Products
          </Link>
          <Link 
            to="/order" 
            className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-100"
          >
            Place an Order
          </Link>
        </div>
      </section>

      <FarmStory />

      <section className="featured-products py-16">
        <h2 className="text-3xl text-center mb-8">Our Best Produce</h2>
        {/* Add Product Previews here */}
      </section>
    </div>
  );
}

export default HomePage;