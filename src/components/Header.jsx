import MovingArrows from "./MovingArrows";


export default function Header() {
  return (
    <header className="bg-black text-gray-300 body-font">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 gap-6">

 
        <div className="flex items-center">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="w-40 md:w-50 h-auto"
          />
        </div>


        <div className="flex flex-col items-center text-center gap-1">
            <MovingArrows>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-amber-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-white text-xl font-bold italic uppercase">
              Limited Time Offer
            </p>
          </div>
</MovingArrows>
          <p className="text-md leading-relaxed font-bold">
            Get $250 Off Your First Service! (ook before April 30)
          </p>
        </div>

       
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
            <div className="text-white font-bold italic uppercase">
              call now
            </div>
            <div className="leading-relaxed">
              +1 (555) 123-4567
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
