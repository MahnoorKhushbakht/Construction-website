export default function MapSection() {
  return (
    <div className="bg-white w-full h-[400px] p-5 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999425207002!2d2.2922926156744056!3d48.85837307928769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf4c7b9d63%3A0x421f89e0b88a1a0!2sEiffel%20Tower!5e0!3m2!1sen!2s!4v1700000000000"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
