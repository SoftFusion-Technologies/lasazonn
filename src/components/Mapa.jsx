import React from 'react';

export default function Mapa() {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto w-full transition-opacity duration-500"
      data-aos="fade-up"
      id="ubicacion"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.4561686892524!2d-65.5033098!3d-27.158333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223535e9e85587:0x7b7187f3d411aa8f!2sJard%C3%ADn+de+la+Rep%C3%BAblica+306,+T4142+Monteros,+Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1727120947583!5m2!1sen!2sar"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
