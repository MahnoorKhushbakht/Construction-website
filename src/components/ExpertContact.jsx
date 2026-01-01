

export default function ExpertContact() {
  return (
    <section className="bg-white py-5 flex justify-center items-center">
      <div className="container mx-auto px-1 flex flex-col lg:flex-row justify-center items-center gap-8">
        

        <div className="grid grid-cols-2 gap-4 w-full lg:w-2/5 justify-items-center">
          <img
            src="./images/land-clearing.jpeg" 
            alt="Land Clearing"
            className="rounded-lg w-full object-cover h-64 lg:h-80"
          />
          <img
            src="./images/excavation.jpg"
            alt="Excavation"
            className="rounded-lg w-full object-cover h-64 lg:h-80"
          />
        </div>

       
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-extrabold italic mb-6">
            EvoBlocs's Most Trusted <br /> Construction Expert
          </h1>

        
          <ul className="mb-6 space-y-3 text-lg md:text-xl">
            <li className="flex items-center gap-2 text-black">
              <span className="text-black">✔</span>
              54 Years Of Industry Experience
            </li>
            <li className="flex items-center gap-2 text-black">
              <span className="text-black">✔</span>
              Licensed, Insured & Safety-Focused
            </li>
            <li className="flex items-center gap-2 text-black">
              <span className="text-black">✔</span>
              Family-Owned & Operated Since 1968
            </li>
          </ul>

      <div className="flex items-center gap-3">
        <img
          src="./images/special-offer.png"
          alt="Construction Expert"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="mb-6 text-sm md:text-base font-medium">
            <p className="font-bold text-black">LIMITED-TIME OFFER</p>
            <p className="text-black">Get $250 Off Your First Service! <br />(Book before April 30)</p>
          </div>
      </div>
     <div className="flex flex-col md:flex-row gap-4">
 <button className="text-black text-lg md:text-xl font-bold italic capitalize py-3 px-6 !bg-amber-400 rounded w-auto hover:bg-amber-500 transition-colors duration-300">
  Schedule Consultation
</button>

             <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white text-sm font-bold bg-amber-400 rounded-full p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <div className="text-sm">
            <div className="text-black font-bold italic uppercase">
              call now
            </div>
            <div className="text-black leading-relaxed">
              +1 (555) 123-4567
            </div>
          </div>
        </div>
        </div>
        </div>

      </div>
    </section>
  );
}
