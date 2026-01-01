import ConsultationBtn from "./ConsultationBtn";
import FreeQuoteForm from "./FreeQuoteForm";
import LogoFooter from "./LogoFooter";

export default function LandingPage() {
  return (
    <section className="h-auto body-font text-white p-5 z-10 relative">
      <div className="container mx-auto px-4 sm:px-5 py-8 sm:py-6 flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">

         <div className="flex gap-1">
  {[...Array(5)].map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-amber-400 mb-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  ))}
</div>

          <h1 className="title-font font-extrabold uppercase italic text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
            Expert Construction Services in Ottawa – 54 Years of Excellence
          </h1>

          <div className="space-y-3 sm:space-y-4">

            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6 text-black bg-white font-bold rounded-full p-1 sm:p-1 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              <p className="text-base sm:text-lg leading-normal text-white font-bold italic">
                Integrated Residential & Commercial Construction Services
              </p>
            </div>

      
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6 text-black bg-white font-bold rounded-full p-1 sm:p-1 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              <p className="text-base sm:text-lg leading-normal text-white font-bold italic">
                From Excavation to Septic Systems – We Handle It All
              </p>
            </div>

            
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6 text-black bg-white font-bold rounded-full p-1 sm:p-1 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              <p className="text-base sm:text-lg leading-normal text-white font-bold italic ">
                Trusted by Ottawa & the Valley for Over 50 Years
              </p>
            </div>
<LogoFooter/>
<ConsultationBtn/>
          </div>
        </div>


<div className="lg:w-2/6 md:w-1/2 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
<FreeQuoteForm/>
</div>
      </div>
    </section>
  );
}