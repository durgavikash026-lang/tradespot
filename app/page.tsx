export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">

        <h1 className="text-3xl font-bold text-green-400">
          TradeSpot
        </h1>

        <div className="flex gap-6 items-center">

          <a href="#home" className="hover:text-green-400">
            Home
          </a>

          <a href="#plans" className="hover:text-green-400">
            Plans
          </a>

          <a href="#about" className="hover:text-green-400">
            About
          </a>

          <a href="#contact" className="hover:text-green-400">
            Contact
          </a>

          <a href="/login" className="hover:text-green-400">
            Login
          </a>

          <a
            href="/signup"
            className="bg-green-500 text-black px-4 py-2 rounded-xl font-semibold"
          >
            Signup
          </a>

        </div>

      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-bold">
          Smart Trading
          <span className="text-green-400">
            {" "}Shared Profits
          </span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl">
          Invest with confidence through our market-focused trading platform.
        </p>

        <button className="mt-10 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-bold">
          Start Investing
        </button>

      </section>

    </div>
  );
}