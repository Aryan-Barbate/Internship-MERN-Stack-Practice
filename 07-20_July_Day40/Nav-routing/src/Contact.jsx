import React from "react";

const Contact = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
      <h2 className="text-5xl font-extrabold text-purple-900 mb-4 text-center">
        Contact Us
      </h2>
      <p className="text-purple-800 text-lg max-w-xl text-center mb-10">
        Have a question or want to work together? Drop us a message.
      </p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert("Message sent!")
          }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold text-purple-900 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-purple-200 rounded-lg p-2.5 text-purple-900 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-purple-900 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-purple-200 rounded-lg p-2.5 text-purple-900 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-purple-900 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-purple-200 rounded-lg p-2.5 text-purple-900 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {[
            { title: "Email", text: "contact@example.com", icon: "📧" },
            { title: "Phone", text: "+1 (555) 123-4567", icon: "📞" },
            { title: "Address", text: "123 Main Street, City, Country", icon: "📍" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md border border-purple-100 flex items-center gap-4"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-purple-900">{item.title}</h4>
                <p className="text-purple-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
