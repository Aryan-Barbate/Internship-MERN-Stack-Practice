import React from "react";

const Contact = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Have any questions? We'd love to hear from you.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">contact@example.com</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">123 Main Street, City, Country</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
