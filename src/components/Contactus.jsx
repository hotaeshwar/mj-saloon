import React, { useState, useEffect, useRef } from 'react';

const ContactUs = () => {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);

  const headerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setVisibleHeader(true);
        }
      }

      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setVisibleForm(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/media/background.jpg)',
            filter: 'brightness(0.3)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
            visibleHeader
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="font-bold uppercase mb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f5f5f5] tracking-tight leading-none">
            BOOK YOUR<br />
            <span className="text-[#c4a574]">APPOINTMENT</span>
          </h1>
          <p className="text-base sm:text-lg text-[#e0e0e0]/70">
            Schedule your visit today and experience luxury
          </p>
        </div>

        {/* Booking Form */}
        <div
          ref={formRef}
          className={`rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 bg-black/40 border-2 border-[#c4a574] transition-all duration-1000 ease-out ${
            visibleForm
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-20 scale-95'
          }`}
        >
          <form 
            action="https://formsubmit.co/himanshukhanegwal@gmail.com" 
            method="POST" 
            className="space-y-5 sm:space-y-6"
          >
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Salon Appointment Booking!" />

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label 
                  htmlFor="firstName" 
                  className="block text-sm sm:text-base font-bold mb-2 text-[#c4a574]"
                >
                  First Name
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="First_Name" 
                  placeholder="Enter your first name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 text-[#f5f5f5] placeholder-gray-500 border border-[#c4a574]/30 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/50 focus:outline-none transition-all text-sm sm:text-base"
                />
              </div>

              <div>
                <label 
                  htmlFor="lastName" 
                  className="block text-sm sm:text-base font-bold mb-2 text-[#c4a574]"
                >
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="Last_Name" 
                  placeholder="Enter your last name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 text-[#f5f5f5] placeholder-gray-500 border border-[#c4a574]/30 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/50 focus:outline-none transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-sm sm:text-base font-bold mb-2 text-[#c4a574]"
              >
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="Phone_Number" 
                placeholder="Enter your phone number" 
                required 
                pattern="[0-9]{10}" 
                title="Please enter a valid 10-digit phone number"
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-[#f5f5f5] placeholder-gray-500 border border-[#c4a574]/30 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/50 focus:outline-none transition-all text-sm sm:text-base"
              />
            </div>

            {/* Location */}
            <div>
              <label 
                htmlFor="location" 
                className="block text-sm sm:text-base font-bold mb-2 text-[#c4a574]"
              >
                Preferred Location
              </label>
              <select 
                id="location" 
                name="Preferred_Location" 
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-[#f5f5f5] border border-[#c4a574]/30 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/50 focus:outline-none transition-all appearance-none cursor-pointer text-sm sm:text-base"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23c4a574' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" className="bg-black">Select Location</option>
                <option value="Kalkaji, New Delhi - 110019" className="bg-black">Kalkaji, New Delhi</option>
                <option value="Alaknanda, South Delhi - 110019" className="bg-black">Alaknanda, South Delhi</option>
              </select>
            </div>

            {/* Service */}
            <div>
              <label 
                htmlFor="service" 
                className="block text-sm sm:text-base font-bold mb-2 text-[#c4a574]"
              >
                Interested Service
              </label>
              <input 
                type="text" 
                id="service" 
                name="Interested_Service" 
                placeholder="e.g., Hair Styling, Facial, Bridal Makeup" 
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-[#f5f5f5] placeholder-gray-500 border border-[#c4a574]/30 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/50 focus:outline-none transition-all text-sm sm:text-base"
              />
            </div>

            {/* Date */}
            <div>
              <label 
                htmlFor="date" 
                className="block text-sm sm:text-base font-bold mb-2 text-[#c4a574]"
              >
                Preferred Date
              </label>
              <input 
                type="date" 
                id="date" 
                name="Preferred_Date" 
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-[#f5f5f5] border border-[#c4a574]/30 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/50 focus:outline-none transition-all cursor-pointer text-sm sm:text-base"
                style={{
                  colorScheme: 'dark'
                }}
              />
            </div>

            {/* Time Slot */}
            <div>
              <label 
                htmlFor="timeSlot" 
                className="block text-sm sm:text-base font-bold mb-2 text-[#c4a574]"
              >
                Preferred Time Slot
              </label>
              <select 
                id="timeSlot" 
                name="Preferred_Time_Slot" 
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-[#f5f5f5] border border-[#c4a574]/30 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/50 focus:outline-none transition-all appearance-none cursor-pointer text-sm sm:text-base"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23c4a574' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" className="bg-black">Select Time Slot</option>
                <option value="09:00 AM - 10:00 AM" className="bg-black">09:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM" className="bg-black">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM" className="bg-black">11:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 01:00 PM" className="bg-black">12:00 PM - 01:00 PM</option>
                <option value="01:00 PM - 02:00 PM" className="bg-black">01:00 PM - 02:00 PM</option>
                <option value="02:00 PM - 03:00 PM" className="bg-black">02:00 PM - 03:00 PM</option>
                <option value="03:00 PM - 04:00 PM" className="bg-black">03:00 PM - 04:00 PM</option>
                <option value="04:00 PM - 05:00 PM" className="bg-black">04:00 PM - 05:00 PM</option>
                <option value="05:00 PM - 06:00 PM" className="bg-black">05:00 PM - 06:00 PM</option>
                <option value="06:00 PM - 07:00 PM" className="bg-black">06:00 PM - 07:00 PM</option>
                <option value="07:00 PM - 08:00 PM" className="bg-black">07:00 PM - 08:00 PM</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 bg-transparent border-2 border-[#c4a574] text-[#c4a574] hover:bg-[#c4a574] hover:text-black uppercase tracking-wider"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;