import React from "react";

const Home = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Welcome to our website! We provide amazing solutions for your business
        needs.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Feature One
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Feature Two
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Feature Three
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
