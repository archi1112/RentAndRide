import React from 'react';
import "./social.css"

const Social = () => {
  return (
    <>
    <a
      href="https://wa.me/9983975077"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
    </a>
    <a
      href="https://www.instagram.com/rentandridejaipur/"
      className="instagram_float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
    >
      <i className="fa fa-instagram instagram-icon"></i>
    </a>
     <a
      href="tel:+919983975077"
      className="call_float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Call us"
    >
      <i className="fa fa-phone call-icon"></i>
    </a>
    <a
      href = "https://www.google.com/search?sca_esv=d2276530c3132d30&sxsrf=AHTn8zqXZuncZ1xsOZTQsR8ntGlUvs1rUQ:1747909565413&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kze0tsGyqZRN4_ar2t0wu_8quzwgsLyLYHyp64qpc1wz-M2yx_ILrMeugt0Qj5pg6b53Qrk8VRuF4qXb5x2l7nr5wU1dBX4QuSzXiJAgR7FjSHKmTCGINgiuBTgJ7-Nx0DIeaiiY%3D&q=Rent+%26+Ride+-Bike+and+Activa+rental+services+Reviews&sa=X&ved=2ahUKEwibyPvF7raNAxXPyzgGHXKqFKUQ0bkNegQIMRAE&biw=1536&bih=730&dpr=1.25"
      className="review_float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Review us"
    >
      <i className="fa fa-star review-icon"></i>
    </a>
    </>
  );
};

export default Social;


    
  
