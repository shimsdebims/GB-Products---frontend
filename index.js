// index.js - Main UI/Display Component
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, LeafyGreen, Package } from 'lucide-react';
import ProductDisplay from './ProductDisplay';

export default function MainDisplay() {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-green-600" />,
      title: "Farm Fresh Delivery",
      description: "Direct from our Burundi farm to your door"
    },
    {
      icon: <LeafyGreen className="w-10 h-10 text-green-600" />,
      title: "Organic Products",
      description: "100% natural farming methods"
    },
    {
      icon: <Package className="w-10 h-10 text-green-600" />,
      title: "Wholesale Available",
      description: "Special rates for bulk orders"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Gabriels Products</h1>
            <p className="text-xl mb-8">Sustainable Agriculture from Burundi's Finest Farm</p>
            <div className="flex gap-4">
              <Link to="/products" className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold">
                View Products
              </Link>
              <Link to="/order" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold">
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductDisplay />
    </div>
  );
}