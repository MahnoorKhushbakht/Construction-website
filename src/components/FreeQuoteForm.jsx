export default function FreeQuoteForm() {
  return (
    <div className="relative bg-white rounded-lg p-6 md:p-8 w-full max-w-md mx-auto flex flex-col">
  
      <div className="absolute -top-10 -right-8 py-1 px-4 z-10">
        <img
          src="./images/stamp.png"
          alt="Quote Icon"
          className="w-30 h-30 object-contain"
        />
      </div>
      
      <h2 className="text-center text-gray-900 text-2xl md:text-xl font-medium title-font mb-6">
        Get a Free Quote
      </h2>

      <div className="mb-4">
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Full Name*"
          className="w-full max-w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-7 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone Number*"
          className="w-full max-w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-7 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email*"
          className="w-full max-w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-7 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="mb-6">
        <textarea
          id="message"
          name="message"
          placeholder="Message*"
          className="w-full max-w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-28 md:h-24 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>

      <button className="text-black text-lg md:text-xl font-bold italic capitalize py-3 !bg-amber-400 rounded w-full hover:bg-amber-500 transition-colors duration-300">
        Get My Free Quote
      </button>
    </div>
  );
}