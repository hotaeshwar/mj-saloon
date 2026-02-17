import React from 'react';

const ContactUs = () => {
  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '6px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#f5f5f5',
    border: '1px solid rgba(196,165,116,0.3)',
    outline: 'none',
    fontSize: '0.9rem',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '6px',
    color: '#c4a574',
  };

  const dropdownArrow = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23c4a574' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`;

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#1a1a1a] pt-28 pb-12 sm:pt-32 sm:pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/media/background.jpg)',
            filter: 'brightness(0.3)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 animate-fade-in-up">
          <h1 className="font-bold uppercase mb-2 text-3xl sm:text-4xl md:text-5xl text-[#f5f5f5] leading-tight">
            BOOK YOUR<br />
            <span className="text-[#c4a574]">APPOINTMENT</span>
          </h1>
          <p className="text-sm sm:text-base text-[#e0e0e0]/70">
            Schedule your visit today and experience luxury
          </p>
        </div>

        {/* Booking Form */}
        <div 
          className="rounded-xl p-5 sm:p-6 md:p-8 bg-[#000]/40 border-2 border-[#c4a574]/60 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          <form
            action="https://formsubmit.co/himanshukhanegwal@gmail.com"
            method="POST"
            className="flex flex-col gap-4 sm:gap-5"
          >
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Salon Appointment Booking!" />

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" style={labelStyle}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="First_Name"
                  placeholder="First name"
                  required
                  style={inputStyle}
                  className="hover:border-[#c4a574] focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20"
                />
              </div>
              <div>
                <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="Last_Name"
                  placeholder="Last name"
                  required
                  style={inputStyle}
                  className="hover:border-[#c4a574] focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20"
                />
              </div>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="Phone_Number"
                  placeholder="10-digit number"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  style={inputStyle}
                  className="hover:border-[#c4a574] focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20"
                />
              </div>
              <div>
                <label htmlFor="location" style={labelStyle}>Preferred Location</label>
                <select
                  id="location"
                  name="Preferred_Location"
                  required
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: dropdownArrow,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem',
                  }}
                  className="hover:border-[#c4a574] focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20"
                >
                  <option value="" style={{ backgroundColor: '#000' }}>Select Location</option>
                  <option value="Kalkaji, New Delhi - 110019" style={{ backgroundColor: '#000' }}>Kalkaji, New Delhi</option>
                  <option value="Alaknanda, South Delhi - 110019" style={{ backgroundColor: '#000' }}>Alaknanda, South Delhi</option>
                </select>
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" style={labelStyle}>Interested Service</label>
              <input
                type="text"
                id="service"
                name="Interested_Service"
                placeholder="e.g., Hair Styling, Facial, Bridal Makeup"
                required
                style={inputStyle}
                className="hover:border-[#c4a574] focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" style={labelStyle}>Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="Preferred_Date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  style={{ ...inputStyle, colorScheme: 'dark', cursor: 'pointer' }}
                  className="hover:border-[#c4a574] focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20"
                />
              </div>
              <div>
                <label htmlFor="timeSlot" style={labelStyle}>Preferred Time Slot</label>
                <select
                  id="timeSlot"
                  name="Preferred_Time_Slot"
                  required
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: dropdownArrow,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem',
                  }}
                  className="hover:border-[#c4a574] focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20"
                >
                  <option value="" style={{ backgroundColor: '#000' }}>Select Time</option>
                  {[
                    '09:00 AM - 10:00 AM','10:00 AM - 11:00 AM','11:00 AM - 12:00 PM',
                    '12:00 PM - 01:00 PM','01:00 PM - 02:00 PM','02:00 PM - 03:00 PM',
                    '03:00 PM - 04:00 PM','04:00 PM - 05:00 PM','05:00 PM - 06:00 PM',
                    '06:00 PM - 07:00 PM','07:00 PM - 08:00 PM',
                  ].map((slot) => (
                    <option key={slot} value={slot} style={{ backgroundColor: '#000' }}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-2.5 rounded-lg font-semibold text-sm uppercase tracking-wider cursor-pointer bg-transparent border-2 border-[#c4a574] text-[#c4a574] transition-all duration-300 hover:bg-[#c4a574] hover:text-[#000] hover:scale-105 hover:shadow-lg hover:shadow-[#c4a574]/40"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;