import React, { useState } from 'react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '918557854703';
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to book an appointment at MJ Salon.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
          aria-label="Open WhatsApp Chat"
        >
          {/* Official WhatsApp Logo SVG */}
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-[#efe1b5] rounded-2xl shadow-2xl overflow-hidden border-4 border-[#ad9b80] animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#3e3631] to-[#2a2520] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-base">MJ Salon</h3>
                <p className="text-[#ad9b80] text-xs">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#ad9b80] transition-colors duration-300"
              aria-label="Close chat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3e3631] flex items-center justify-center flex-shrink-0">
                <span className="text-[#ad9b80] text-xs font-bold">MJ</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-md max-w-[85%]">
                <p className="text-[#3e3631] text-sm leading-relaxed">
                  👋 Welcome to <strong>MJ Salon by Mohit & Jatin!</strong>
                </p>
              </div>
            </div>

            {/* Services Message */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3e3631] flex items-center justify-center flex-shrink-0">
                <span className="text-[#ad9b80] text-xs font-bold">MJ</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-md max-w-[85%]">
                <p className="text-[#3e3631] text-sm leading-relaxed mb-2">
                  We offer premium services:
                </p>
                <ul className="text-[#3e3631] text-xs space-y-1">
                  <li>✨ Bridal Makeup</li>
                  <li>💇 Hair Styling & Coloring</li>
                  <li>💅 Nail Art & Extensions</li>
                  <li>🧖 Keratin Treatments</li>
                  <li>💆 Facial & Spa Services</li>
                </ul>
              </div>
            </div>

            {/* Call to Action Message */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3e3631] flex items-center justify-center flex-shrink-0">
                <span className="text-[#ad9b80] text-xs font-bold">MJ</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-md max-w-[85%]">
                <p className="text-[#3e3631] text-sm leading-relaxed">
                  Click below to chat with us on WhatsApp and book your appointment! 📅
                </p>
              </div>
            </div>
          </div>

          {/* Footer with WhatsApp Button */}
          <div className="p-4 bg-gradient-to-r from-[#3e3631] to-[#2a2520]">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Start WhatsApp Chat
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppChat;