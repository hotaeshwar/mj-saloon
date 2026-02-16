import React, { useState, useEffect, useRef } from 'react';

const ContactUs = () => {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);

  const headerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // ── Header Observer ──
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleHeader(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);

    // ── Form Observer ──
    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleForm(true);
          formObserver.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (formRef.current) formObserver.observe(formRef.current);

    return () => {
      headerObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#f5f5f5',
    border: '1px solid rgba(196,165,116,0.3)',
    outline: 'none',
    fontSize: '0.95rem',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 700,
    marginBottom: '8px',
    color: '#c4a574',
  };

  const dropdownArrow = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23c4a574' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`;

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
        /* ✅ FIX: push content below fixed navbar */
        paddingTop: '110px',
        paddingBottom: '64px',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/media/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }} />
      </div>

      <div style={{
        maxWidth: '56rem',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 10,
      }}>

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            opacity: visibleHeader ? 1 : 0,
            transform: visibleHeader ? 'translateY(0)' : 'translateY(-24px)',
            transition: 'opacity 0.55s ease-out, transform 0.55s ease-out',
            willChange: 'opacity, transform',
          }}
        >
          <h1 style={{
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '12px',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            color: '#f5f5f5',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}>
            BOOK YOUR<br />
            <span style={{ color: '#c4a574' }}>APPOINTMENT</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(224,224,224,0.7)' }}>
            Schedule your visit today and experience luxury
          </p>
        </div>

        {/* ── Booking Form ── */}
        <div
          ref={formRef}
          style={{
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            border: '2px solid #c4a574',
            opacity: visibleForm ? 1 : 0,
            transform: visibleForm ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
            transition: 'opacity 0.55s ease-out 0.1s, transform 0.55s ease-out 0.1s',
            willChange: 'opacity, transform',
          }}
        >
          <form
            action="https://formsubmit.co/himanshukhanegwal@gmail.com"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Salon Appointment Booking!" />

            {/* Name Fields */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}>
              <div>
                <label htmlFor="firstName" style={labelStyle}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="First_Name"
                  placeholder="Enter your first name"
                  required
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#c4a574';
                    e.target.style.boxShadow = '0 0 0 3px rgba(196,165,116,0.2)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(196,165,116,0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="Last_Name"
                  placeholder="Enter your last name"
                  required
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#c4a574';
                    e.target.style.boxShadow = '0 0 0 3px rgba(196,165,116,0.2)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(196,165,116,0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" style={labelStyle}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="Phone_Number"
                placeholder="Enter your phone number"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                style={inputStyle}
                onFocus={e => {
                  e.target.style.borderColor = '#c4a574';
                  e.target.style.boxShadow = '0 0 0 3px rgba(196,165,116,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(196,165,116,0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Location */}
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
                onFocus={e => {
                  e.target.style.borderColor = '#c4a574';
                  e.target.style.boxShadow = '0 0 0 3px rgba(196,165,116,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(196,165,116,0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="" style={{ backgroundColor: '#000' }}>Select Location</option>
                <option value="Kalkaji, New Delhi - 110019" style={{ backgroundColor: '#000' }}>Kalkaji, New Delhi</option>
                <option value="Alaknanda, South Delhi - 110019" style={{ backgroundColor: '#000' }}>Alaknanda, South Delhi</option>
              </select>
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
                onFocus={e => {
                  e.target.style.borderColor = '#c4a574';
                  e.target.style.boxShadow = '0 0 0 3px rgba(196,165,116,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(196,165,116,0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" style={labelStyle}>Preferred Date</label>
              <input
                type="date"
                id="date"
                name="Preferred_Date"
                required
                min={new Date().toISOString().split('T')[0]}
                style={{ ...inputStyle, colorScheme: 'dark', cursor: 'pointer' }}
                onFocus={e => {
                  e.target.style.borderColor = '#c4a574';
                  e.target.style.boxShadow = '0 0 0 3px rgba(196,165,116,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(196,165,116,0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Time Slot */}
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
                onFocus={e => {
                  e.target.style.borderColor = '#c4a574';
                  e.target.style.boxShadow = '0 0 0 3px rgba(196,165,116,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(196,165,116,0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="" style={{ backgroundColor: '#000' }}>Select Time Slot</option>
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

            {/* Submit Button */}
            <div style={{ paddingTop: '1rem' }}>
              <button
                type="submit"
                style={{
                  padding: '14px 48px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  border: '2px solid #c4a574',
                  color: '#c4a574',
                  transition: 'background-color 0.25s ease, color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.target.style.backgroundColor = '#c4a574';
                  e.target.style.color = '#000';
                  e.target.style.transform = 'scale(1.04)';
                  e.target.style.boxShadow = '0 8px 24px rgba(196,165,116,0.4)';
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#c4a574';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
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