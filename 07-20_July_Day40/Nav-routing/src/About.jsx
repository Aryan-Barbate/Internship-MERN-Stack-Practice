import React from "react";

const About = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        We are a team of passionate developers dedicated to building amazing web
        experiences.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To deliver high-quality software solutions that make a difference.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To be a global leader in innovative technology solutions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Values
          </h3>
          <p className="text-gray-600">
            Integrity, innovation, and customer satisfaction are our core
            values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
