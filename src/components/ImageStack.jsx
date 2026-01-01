const images = [
  "./images/demolition.jpg",
  "./images/excavation.jpg",
  "./images/ken01.jpg",
  "./images/ken02.jpg",
  "./images/ken03.jpg",
  "./images/land-clearing.jpeg",
  "./images/ken07.jpg",
  "./images/ken06.jpg",
];

export default function ImageStack() {
  return (
    <section className="flex items-center justify-center bg-white body-font">
      <div className="container mx-auto px-5 ">
        

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`gallery-${index}`}
                className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
