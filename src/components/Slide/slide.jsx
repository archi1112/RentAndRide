import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slide.css'; 

function Slide() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="carousel-item-content">
            <div className="carousel-text">
              <h3>Spiritual Darshan Trips </h3>
              <p> Rental Cars for Jaipur to Khatu Shyam Ji & Salasar Balaji trips.      
                  Well - Maintained Vehicles for solo or group travel.  
                  Hassle-Free Journeys - with focus on safety and punctuality.  
                  Seamless Pilgrimage Experience from start to finish.</p>
            </div>
            <img
              className="d-block w-50"
              src="/assets/Salasar balaji.webp"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="carousel-item-content">
            <div className="carousel-text">
              <h3>Luxury Taxi Services</h3>
              <p>Premium Fleet featuring luxury cars, and sedans for a comfortable ride.
                 Customizable Itineraries to suit your schedule and preferences.
                 24/7 Availability for flexible booking and travel convenience.
                 Airport & Railway station Pickup/Drop for added convenience and seamless transfers.</p>
            </div>
            <img
              className="d-block w-50"
              src="/assets/trip.webp"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <div className="carousel-text">
              <h3>Self Drive Cars </h3>
              <p>Wide Range of Vehicles including compact cars, and luxury options for all travel needs.
                Explore at Your Own Pace with the freedom of self-drive, perfect for scenic routes and detours.
                24/7 Roadside Assistance for a safe and worry-free driving experience.
                No Hidden Fees with transparent pricing and clear terms.</p>
            </div>
            <img
              className="d-block w-50"
              src="/assets/self drive.webp"
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
