import React from "react";

const Home = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-4 text-center">
        Welcome Home
      </h2>
      <p className="text-blue-700 text-lg max-w-xl text-center mb-10">
        We build modern, fast, and scalable web solutions to grow your business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {["Lightning Fast", "Mobile Ready", "Secure & Reliable"].map(
          (title, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 text-center hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
              <p className="text-blue-700">
                {i === 0 &&
                  "Optimized performance for the best user experience."}
                {i === 1 &&
                  "Looks perfect on every device, from phones to desktops."}
                {i === 2 &&
                  "Enterprise-grade security you can trust."}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Home;
