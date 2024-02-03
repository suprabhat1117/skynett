import React, { useState, useRef } from "react";
import "./Services.css";

function Services() {
  const [servicesState, setServicesState] = useState([
    {
      title: "Digital Marketing",
      src: "../../assets/images/DigitalMarketing.png",
      description: "",
    },
    {
      title: "Web Development",
      src: "../../assets/images/webdevelopment.jpg",
      description: "",
    },
    {
      title: "App Development",
      src: "../../assets/images/appdevelopment.jpeg",
      description: "",
    },
  ]);

  const rowRef = useRef(null);

  return (
    <div className="services">
      <h2 className="heading">Our Services</h2>
      <div className="row" ref={rowRef}>
        {servicesState.map((service, index) => (
          <div className="card" key={index}>
            <div className="image-section">
              <img src={service.src} alt="Card Image" />
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>
                  This is a simple card with some content. You can customize it
                  as needed.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
