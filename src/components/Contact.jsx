

const contactItems = [
  {
    label: "Serving",
    value: "+Ottawa & the Valley",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

    ),
  },
  {
    label: "Call Now",
    value: "+1 (555) 123-4567",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "admin@kwconstruction.ca",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-5 h-5 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

    ),
  },
  {
    label: "REQUEST A FREE QUOTE​",
    value: "(Get expert service with a single click!)",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>

    ),
  },
];

export default function Contact() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-12">

      
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold italic text-black">
            Let’s Get Started – <br />
            Contact Us Today!
          </h2>

          {/* ONE COLUMN Contact Items */}
          <div className="flex flex-col gap-5 items-center lg:items-start">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>

                <div className="text-sm">
                  <p className="font-bold italic uppercase text-gray-800">
                    {item.label}
                  </p>
                  <p className="text-gray-600">{item.value}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

       <div className="relative bg-black rounded-lg p-6 md:p-8 w-full max-w-md mx-auto flex flex-col">
  
      <div className="absolute -top-10 -right-8 py-1 px-4 z-10">
        <img
          src="./images/stamp.png"
          alt="Quote Icon"
          className="w-30 h-30 object-contain"
        />
      </div>
      
      <h2 className="text-center text-white text-2xl md:text-xl font-medium title-font mb-6">
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
      </div>
    </section>
  );
}
