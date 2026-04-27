"use client";

export default function LocationSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Visit Our Center</h2>
          <p className="text-gray-500 text-lg">Located in the heart of Hyderabad.</p>
        </div>
        
        <div className="w-full aspect-[21/9] md:aspect-[21/7] rounded-3xl overflow-hidden bg-gray-100 fade-up">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.691763784112!2d78.55836269999999!3d17.391515600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b006859580b%3A0x7d6a5c1a7bdfd92a!2sUppal%20Bhagayat%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714156942055!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          />
        </div>
      </div>
    </section>
  );
}
