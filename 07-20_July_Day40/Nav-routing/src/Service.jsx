import React from "react";

const Service = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        We offer a wide range of services to help your business grow.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Web Development
          </h3>
          <p className="text-gray-600">
            Modern and responsive websites built with latest technologies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Mobile Apps
          </h3>
          <p className="text-gray-600">
            Cross-platform mobile applications for iOS and Android.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            UI/UX Design
          </h3>
          <p className="text-gray-600">
            Beautiful and intuitive user interfaces and experiences.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            SEO Optimization
          </h3>
          <p className="text-gray-600">
            Improve your search engine ranking and online visibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
