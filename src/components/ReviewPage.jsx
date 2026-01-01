import Review from "./Review";

export default function ReviewPage() {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">

       
        <div className="flex flex-col items-center lg:items-start gap-4">
          <img
            src="/images/google.jpeg"
            alt="Google Reviews"
            className="w-60 mx-auto lg:mx-0"
          />
        </div>

    
        <div className="lg:col-span-2">
          <Review />
        </div>

      </div>
    </section>
  );
}
