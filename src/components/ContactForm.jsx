import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-primary from-orange-500 to-purple-500 py-10">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Contáctanos
        </h2>
        <p className="text-center text-lg text-gray-600">
          Si tienes alguna pregunta o comentario, ¡estamos aquí para ayudarte!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white text-black w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>

        {status && (
          <div className="mt-4 text-center text-green-500 font-semibold">
            <p>{status}</p>
          </div>
        )}
      </div>
    </div>
  );
}
