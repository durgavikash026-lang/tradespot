export default function TradeSpotWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-green-400">TradeSpot</h1>
        <div className="space-x-6 text-sm md:text-base">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#plans" className="hover:text-green-400">Plans</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-24"
      >
        <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
          Smart Trading <span className="text-green-400">Shared Profits</span>
        </h2>
        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          Invest with confidence through our market-focused trading platform.
          We aim to generate strong monthly returns using professional trading strategies.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-2xl shadow-lg transition">
            Start Investing
          </button>
          <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-2xl transition">
            View Performance
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl">
            <h3 className="text-4xl font-bold text-green-400">500+</h3>
            <p className="mt-2 text-gray-300">Active Investors</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl">
            <h3 className="text-4xl font-bold text-green-400">₹2Cr+</h3>
            <p className="mt-2 text-gray-300">Assets Managed</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl">
            <h3 className="text-4xl font-bold text-green-400">24/7</h3>
            <p className="mt-2 text-gray-300">Trading Monitoring</p>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section id="plans" className="px-6 py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-14">
          Investment Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-black border border-gray-800 rounded-3xl p-8 shadow-lg hover:border-green-400 transition">
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-gray-400 mt-2">Perfect for beginners</p>
            <div className="mt-6 text-5xl font-bold text-green-400">₹50K</div>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Market-linked returns</li>
              <li>✔ Monthly performance reports</li>
              <li>✔ Secure investment tracking</li>
            </ul>
            <button className="mt-8 w-full bg-green-500 text-black py-3 rounded-2xl font-semibold hover:bg-green-600">
              Invest Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-green-500 text-black rounded-3xl p-8 shadow-2xl scale-105">
            <h3 className="text-2xl font-bold">Professional</h3>
            <p className="mt-2">Most Popular Plan</p>
            <div className="mt-6 text-5xl font-bold">₹1L+</div>
            <ul className="mt-6 space-y-3">
              <li>✔ Advanced trading strategies</li>
              <li>✔ Priority support</li>
              <li>✔ Weekly analytics updates</li>
            </ul>
            <button className="mt-8 w-full bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-900">
              Start Growing
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-black border border-gray-800 rounded-3xl p-8 shadow-lg hover:border-green-400 transition">
            <h3 className="text-2xl font-bold">Elite</h3>
            <p className="text-gray-400 mt-2">High capital investors</p>
            <div className="mt-6 text-5xl font-bold text-green-400">₹5L+</div>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Dedicated portfolio management</li>
              <li>✔ Exclusive trading insights</li>
              <li>✔ VIP support access</li>
            </ul>
            <button className="mt-8 w-full bg-green-500 text-black py-3 rounded-2xl font-semibold hover:bg-green-600">
              Join Elite
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About TradeSpot
            </h2>
            <p className="text-gray-300 leading-8 text-lg">
              TradeSpot is a modern trading and investment platform focused on helping investors access professional trading opportunities.
              Our mission is to combine technology, analytics, and disciplined strategies to create long-term wealth growth.
            </p>

            <p className="text-gray-400 mt-6 leading-7">
              Disclaimer: Investments are subject to market risks. Returns are not guaranteed and depend on trading performance.
            </p>
          </div>

<div className="bg-gradient-to-br from-blue-400 to-blue-700 rounded-3xl p-10 text-white shadow-2xl">            <h3 className="text-3xl font-bold">Why Choose Us?</h3>
            <ul className="mt-8 space-y-5 text-lg">
              <li>✔ Professional Trading Team</li>
              <li>✔ Secure Investment Tracking</li>
              <li>✔ Transparent Reporting</li>
              <li>✔ Fast Withdrawals</li>
              <li>✔ Modern Fintech Experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-950 px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Get Started Today</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Join TradeSpot and explore smarter investment opportunities with modern trading solutions.
        </p>

        <form
  action="https://formspree.io/f/mbdbdnnz"
  method="POST"
  className="mt-10 max-w-xl mx-auto bg-black border border-gray-800 rounded-3xl p-8 shadow-xl"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full mb-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 outline-none"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full mb-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 outline-none"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={4}
    className="w-full mb-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 outline-none"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-green-500 hover:bg-green-600 text-black py-3 rounded-2xl font-semibold transition"
  >
    Send Message
  </button>
</form>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2026 TradeSpot. All Rights Reserved.
      </footer>
    </div>
  );
}
