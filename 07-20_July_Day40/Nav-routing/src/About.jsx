import React from "react";

const About = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 px-4">
      <h2 className="text-5xl font-extrabold text-emerald-900 mb-4 text-center">
        About Us
      </h2>
      <p className="text-emerald-800 text-lg max-w-2xl text-center mb-10">
        We are a team of passionate developers dedicated to building amazing web
        experiences with clean code and modern design.
      </p>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {[
          {
            title: "Our Mission",
            text: "To deliver high-quality software solutions that make a real difference.",
          },
          {
            title: "Our Vision",
            text: "To be a global leader in innovative and sustainable technology.",
          },
          {
            title: "Our Values",
            text: "Integrity, innovation, and customer satisfaction come first.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex-1 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 hover:bg-emerald-50 transition-colors"
          >
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">
              {item.title}
            </h3>
            <p className="text-emerald-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
