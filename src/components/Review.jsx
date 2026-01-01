import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Johanna Ashton",
    info: "5 reviews · 16 photos",
    text: "I was in a bind to get a fast quote for a septic install. Kyle came next morning and gave me a very reasonable quote within a few hours!",
  },
  {
    name: "Nadine Blackmore",
    info: "5 reviews",
    text: "We had to replace a 50 year septic tank. The company was quick to come out and review the site.",
  },
  {
    name: "New Reviewer",
    info: "5 reviews",
    text: "Very professional service. Highly recommended!",
  },

];

export default function Review() {
  const [current, setCurrent] = useState(0);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  const slidesToShow = isDesktop ? 2 : 1;
  const maxIndex = Math.ceil(reviews.length / slidesToShow) - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <div className="overflow-hidden">
        <div
          className="grid grid-flow-col auto-cols-[100%] lg:auto-cols-[50%] transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="p-6">
              <div className="bg-white shadow-lg rounded-lg p-6 h-full">
                <h3 className="text-black italic font-semibold text-lg">
                  {review.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{review.info}</p>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>

                <p className="text-gray-700">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <div className="flex justify-center mt-4 gap-2 lg:hidden">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
