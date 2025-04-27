"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Einmal", "Kaufen,", "immernoch", "Kaufen"];
const subtitleWords = ["Bringing premium quality to Germany."];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="font-sans">
      {/* Navbar Section */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-start">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Image
              src="/logo.png"  // Path to the logo image
              alt="Company Logo"
              width={50}  // Logo size
              height={50} // Logo size
            />
            <span className="text-3xl font-bold text-primary ml-2">Einmal Group</span>
          </div>

          {/* Navigation Links */}
          <div className="space-x-8 hidden md:flex ml-auto">
            <a href="#services" className="text-lg text-foreground hover:text-primary transition">
              Our Products
            </a>
            <a href="#about" className="text-lg text-foreground hover:text-primary transition">
              About Us
            </a>
            <a href="#contact" className="text-lg text-foreground hover:text-primary transition">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          aria-hidden="true"
        >
          <source src="/bg1.mp4" type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="relative z-10 space-y-4">
          <h1
            className="text-4xl sm:text-6xl font-bold text-white bg-black/60 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex flex-wrap justify-center"
            data-aos="fade-down"
          >
            {(words || []).map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className={`mx-2 ${index >= 2 ? 'text-white' : 'text-cyan-300'}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          
          <p
            className="text-2xl sm:text-3xl font-semibold text-white flex justify-center"
            data-aos="fade-down"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/50 backdrop-blur-md p-4 rounded-2xl shadow-md"
            >
              {subtitleWords.join(' ')}
            </motion.div>
          </p>

          
          {/* Scroll Down Arrow */}
          <div className="mt-10 animate-bounce" data-aos="fade-up">
            <a href="#about" aria-label="Scroll Down">
              <svg
                className="w-8 h-8 text-white mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section id="about" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            At Einmal Group, we specialize in transforming ideas into real-world solutions.
            Our team of passionate experts work across industries to build scalable web, app, and cloud-based products.
            Together, we drive your business success forward.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="services" className="py-20 px-8 bg-white relative">
        {/* Video Background for Product Section */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          aria-hidden="true"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Products</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Discover the wide variety of salt products we offer, catering to both industrial and personal needs. From the purest Himalayan salt to essential road salt, we provide high-quality products to suit every requirement.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Himalayan Pink Salt */}
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-50" data-aos="zoom-in">
              <h3 className="text-xl font-semibold text-primary mb-2">Himalayan Pink Salt</h3>
              <p className="text-gray-600">Experience the health benefits of our premium Himalayan pink salt, perfect for cooking, bathing, and natural healing therapies. Known for its purity and mineral content.</p>
            </div>
            
            {/* Road Salt for Winter */}
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-50" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-primary mb-2">Road Salt for Winter</h3>
              <p className="text-gray-600">Our high-quality road salt is ideal for winter conditions, helping to prevent ice buildup on roads, driveways, and walkways, ensuring safety during the cold months.</p>
            </div>
            
            {/* Salt Soap for Massage */}
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-50" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-primary mb-2">Salt Soap for Massage</h3>
              <p className="text-gray-600">Indulge in the therapeutic benefits of salt soap. Perfect for massages, it helps to exfoliate the skin, promoting relaxation and rejuvenation with its natural mineral content.</p>
            </div>
            
            {/* Animal Salt Feed */}
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-50" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-primary mb-2">Animal Salt Feed</h3>
              <p className="text-gray-600">Our animal salt feed provides essential minerals to livestock, improving health and productivity. It is available in various forms for easy integration into animal diets.</p>
            </div>
            
            {/* Salt for Construction */}
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-50" data-aos="zoom-in" data-aos-delay="400">
              <h3 className="text-xl font-semibold text-primary mb-2">Salt for Construction</h3>
              <p className="text-gray-600">Our construction-grade salt is used in various applications such as concrete production, soil stabilization, and other industrial processes, offering excellent quality for every project.</p>
            </div>
            
            {/* Salt-Related Products */}
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-50" data-aos="zoom-in" data-aos-delay="500">
              <h3 className="text-xl font-semibold text-primary mb-2">Other Salt Products</h3>
              <p className="text-gray-600">We offer a variety of other salt-based products for different industries. Whatever your salt needs, we have the right solution for you. Contact us for more information!</p>
            </div>
          </div>
        </div>
      </section>
    
      {/* Contact Us Section */}
      <section id="contact" className="bg-gray-100 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-primary">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Interested in working with us? Let's discuss how we can help your business grow!
          </p>
          <a
            href="mailto:contact@einmal.com"
            className="inline-block bg-primary text-white py-3 px-6 rounded-full text-lg hover:bg-orange-500 transition"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 text-sm bg-white">
        © Einmal Group 2025
      </footer>
    </main>
  );
}
