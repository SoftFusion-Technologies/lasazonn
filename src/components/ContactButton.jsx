import React from 'react';
import whatsappIcon from '../assets/LogoRosa.svg';

function ContactButton() {
    return (
      <div className="fixed bottom-20 right-5 z-50 animate-bounce">
        <a
          href="https://api.whatsapp.com/send?phone=3863531891"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-20 h-20" />
        </a>
      </div>
    );
  }
  
  export default ContactButton;