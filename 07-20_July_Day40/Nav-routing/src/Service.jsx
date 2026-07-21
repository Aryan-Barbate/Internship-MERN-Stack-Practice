import React from "react";

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 px-4">
      <h2 className="text-5xl font-extrabold text-amber-900 mb-4 text-center">
        Our Services
      </h2>
      <p className="text-amber-800 text-lg max-w-xl text-center mb-10">
        From design to deployment, we cover every stage of the product lifecycle.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {[
          {
            title: "Web Development",
            text: "Modern, responsive sites built with React and Tailwind.",
          },
          {
            title: "Mobile Apps",
            text: "Cross-platform apps for iOS and Android.",
          },
          {
            title: "UI/UX Design",
            text: "Intuitive interfaces that users love.",
          },
          {
            title: "SEO Optimization",
            text: "Rank higher and grow your organic traffic.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-amber-500 hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-xl font-bold text-amber-900 mb-2">
              {service.title}
            </h3>
            <p className="text-amber-700">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
