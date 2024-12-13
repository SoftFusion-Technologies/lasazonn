import React from 'react';
import './Carta.css'; // Asegúrate de tener un archivo de estilos adecuado
import { styles } from '../styles';

const Carta = () => {
  // Datos de ejemplo para hamburguesas, pizzas y calzones
  const hamburguesas = [
    {
      name: 'Hamburguesa Clásica',
      description: 'Carne, queso, lechuga, tomate y salsa especial.',
      price: '$8.00'
    },
    {
      name: 'Hamburguesa BBQ',
      description: 'Carne, cebolla caramelizada, salsa BBQ, queso cheddar.',
      price: '$9.00'
    },
    {
      name: 'Hamburguesa Vegetariana',
      description: 'Hamburguesa de soja, vegetales frescos, salsa vegana.',
      price: '$7.00'
    },
    {
      name: 'Hamburguesa Doble Carne',
      description: 'Dos carnes, queso cheddar, bacon, cebolla frita.',
      price: '$10.00'
    },
    {
      name: 'Hamburguesa Tex-Mex',
      description: 'Carne, guacamole, jalapeños, queso fundido.',
      price: '$9.50'
    },
    {
      name: 'Hamburguesa Deluxe',
      description: 'Carne, bacon, huevo frito, queso suizo.',
      price: '$11.00'
    },
    {
      name: 'Hamburguesa Hawaiana',
      description: 'Carne, piña, jamón, queso suizo.',
      price: '$9.00'
    },
    {
      name: 'Hamburguesa Picante',
      description: 'Carne, salsa picante, jalapeños, cebolla morada.',
      price: '$8.50'
    }
  ];

  const pizzas = [
    {
      name: 'Pizza Margherita',
      description: 'Tomate, queso mozzarella, albahaca fresca.',
      price: '$12.00'
    },
    {
      name: 'Pizza Pepperoni',
      description: 'Tomate, queso mozzarella, pepperoni.',
      price: '$13.00'
    },
    {
      name: 'Pizza Hawaiana',
      description: 'Tomate, queso mozzarella, piña, jamón.',
      price: '$14.00'
    },
    {
      name: 'Pizza Vegetariana',
      description: 'Tomate, mozzarella, verduras frescas.',
      price: '$13.00'
    },
    {
      name: 'Pizza Cuatro Quesos',
      description: 'Mozzarella, cheddar, parmesano, gorgonzola.',
      price: '$15.00'
    },
    {
      name: 'Pizza BBQ',
      description: 'Tomate, pollo a la BBQ, cebolla caramelizada.',
      price: '$14.50'
    },
    {
      name: 'Pizza Mexicana',
      description: 'Tomate, carne molida, jalapeños, queso cheddar.',
      price: '$13.50'
    },
    {
      name: 'Pizza Carbonara',
      description: 'Tomate, queso mozzarella, bacon, crema.',
      price: '$14.00'
    },
    {
      name: 'Pizza Margarita',
      description: 'Tomate, mozzarella, albahaca y aceite de oliva.',
      price: '$12.50'
    },
    {
      name: 'Pizza Suprema',
      description: 'Tomate, queso mozzarella, pollo, cebolla y pimientos.',
      price: '$15.00'
    }
  ];

  const calzones = [
    {
      name: 'Calzone de Carne',
      description: 'Carne molida, salsa de tomate, queso mozzarella.',
      price: '$10.00'
    },
    {
      name: 'Calzone Vegetariano',
      description: 'Verduras frescas, queso mozzarella, salsa tomate.',
      price: '$9.00'
    },
    {
      name: 'Calzone Hawaiano',
      description: 'Piña, jamón, queso mozzarella, salsa tomate.',
      price: '$11.00'
    },
    {
      name: 'Calzone de Pollo',
      description: 'Pollo, cebolla caramelizada, salsa barbacoa.',
      price: '$12.00'
    },
    {
      name: 'Calzone Supremo',
      description: 'Carne, bacon, salsa BBQ, queso mozzarella.',
      price: '$13.00'
    },
    {
      name: 'Calzone de Pesto',
      description: 'Pesto, pollo, espinacas, queso mozzarella.',
      price: '$12.00'
    },
    {
      name: 'Calzone Mexicano',
      description: 'Carne molida, jalapeños, queso cheddar, salsa tomate.',
      price: '$13.50'
    },
    {
      name: 'Calzone de Quesos',
      description: 'Mozzarella, ricotta, parmesano, salsa de tomate.',
      price: '$10.00'
    },
    {
      name: 'Calzone Picante',
      description: 'Carne, salsa picante, cebolla, jalapeños.',
      price: '$12.50'
    },
    {
      name: 'Calzone Especial',
      description: 'Pollo, espinacas, salsa de queso, aceitunas.',
      price: '$11.50'
    }
  ];

  // Función para manejar el clic y redirigir al enlace de WhatsApp
  const handleWhatsAppClick = (name, description) => {
    const message = `¡Hola! Quiero comprar: ${name}. Descripción: ${description}.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5493863531891';
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };
  return (
    <section className="carta">
      <div className="carta-header">
        <h2 className={styles.sectionHeadText}>Menú Digital</h2>
        <p>
          Elegí tu favorito entre nuestras hamburguesas, pizzas y calzones, hace
          click y te manda nuestro WhatsApp con el pedido.
        </p>
      </div>

      <div className="seccion">
        <h3>Hamburguesas</h3>
        <div className="items">
          {hamburguesas.map((item, index) => (
            <div
              key={index}
              className="item"
              onClick={() => handleWhatsAppClick(item.name, item.description)}
            >
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <span className="precio">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="seccion">
        <h3>Pizzas</h3>
        <div className="items">
          {pizzas.map((item, index) => (
            <div
              key={index}
              className="item"
              onClick={() => handleWhatsAppClick(item.name, item.description)}
            >
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <span className="precio">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="seccion">
        <h3>Calzones</h3>
        <div className="items">
          {calzones.map((item, index) => (
            <div
              key={index}
              className="item"
              onClick={() => handleWhatsAppClick(item.name, item.description)}
            >
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <span className="precio">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carta;
