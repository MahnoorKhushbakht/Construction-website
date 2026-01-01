import ConsultationBtn from "./ConsultationBtn";

export default function Services() {
  return (
    <section className="bg-black w-full min-h-screen text-white font-sans">
<div className="flex flex-col items-center">


  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="#FBBF24"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
    />
  </svg>
</div>



      <div className="container px-5 py-16 mx-auto">

        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold italic font-sans mb-4">
           Trusted Expert Construction Services in EvoBlocs & the Valley
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-300 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar

dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          </p>
        </div>

  
        <div className="flex flex-wrap -m-4">
          {[
            {
              img: "./images/demolition.jpg",
              title: "Demolition",
              desc: "Your Paragraph text goes Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
              img: "./images/excavation.jpg",
              title: "Excavation",
              desc: "Your Paragraph text goes Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
              img: "./images/land-clearing.jpeg",
              title: "Land Clearing",
              desc: "Your Paragraph text goes Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
          ].map((service, index) => (
            <div key={index} className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col items-center text-center">
                <img
                  className="lg:h-64 md:h-48 w-full object-cover object-center"
                  src={service.img}
                  alt={service.title}
                />
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl text-black font-bold italic font-sans mb-3">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-black font-sans">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
<div className="flex justify-center mt-12">
  <ConsultationBtn />   
</div>
      </div>
      
    </section>
  );
}
