import LandingPage from "./LandingPage";

export default function HeroPage() {
  return (
    <section className="relative h-auto ">

      <div className="absolute top-0 left-0 w-full h-full">
        <video
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source
    src="./videos/video.mp4"
    type="video/mp4"
  />
</video>

         <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <LandingPage/>
    </section>
  );
}