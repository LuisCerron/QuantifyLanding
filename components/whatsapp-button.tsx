// app/components/whatsapp-button.tsx

import React from 'react';
import Link from 'next/link';
// CAMBIO: Usar un ícono estándar de react-icons
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  // Configuración del enlace
  const phoneNumber = '51965665045'; 
  const message = 'Hola, estoy interesado en sus servicios de desarrollo de software y quiero pedir una cotización.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      
      {/* CAMBIO: Tooltip mejorado (para Desktop) con colores del tema y mensaje 24/7 */}
      <span
        className="
          absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 
          bg-card border border-border text-card-foreground /* Estilo de shadcn/ui */
          text-sm font-semibold rounded-lg shadow-xl
          opacity-0 group-hover:opacity-100 
          transform -translate-x-2 group-hover:-translate-x-0 /* Animación de slide */
          transition-all duration-300
          pointer-events-none whitespace-nowrap
        "
      >
        ¿Dudas? ¡Escríbenos 24/7! 💬
      </span>

      {/* CAMBIO: Botón Flotante con animación 'throb' */}
      <Link 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="
          flex items-center justify-center 
          w-16 h-16 
          bg-green-500 hover:bg-green-600 
          text-white 
          rounded-full shadow-2xl 
          transition-all duration-300 ease-in-out
          
          /* --- Animaciones Clave --- */
          animate-throb /* 1. Animación en reposo (visible en móvil) */
          group-hover:animate-none /* 2. Pausa la animación en hover */
          group-hover:scale-110 /* 3. Agranda en hover */
        "
        aria-label="Chatear en WhatsApp (Soporte 24/7)"
      >
        {/* CAMBIO: Icono estándar y más grande */}
        <FaWhatsapp className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default WhatsAppButton;