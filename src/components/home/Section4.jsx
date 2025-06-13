import React from 'react';
import { GiCupcake } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { TbCakeRoll } from "react-icons/tb";
import { SiCakephp } from "react-icons/si";
import { CgMenuCake } from "react-icons/cg";

export const Section4 = () => {
  const cardData = [
    { Icon: GiCupcake, title: "With supporting text", text: "Dedicated support for all your need" },
    { Icon: RiCake3Line, title: "With supporting text", text: "Dedicated support for all your need" },
    { Icon: LuCakeSlice, title: "With supporting text", text: "Dedicated support for all your need" },
    { Icon: SiCakephp, title: "With supporting text", text: "Dedicated support for all your need" },
    { Icon: TbCakeRoll, title: "With supporting text", text: "Dedicated support for all your need" },
    { Icon: CgMenuCake, title: "With supporting text", text: "Dedicated support for all your need" }
  ];

  return (
    <>
      <div className="d-flex flex-column justify-content-center text-center">
        <h5>All Services</h5>
        <h2>Check Craft Solutions</h2>
        <p>Explore our comprehensive range of exceptional services and unwavering commitment to excellence</p>
      </div>

      <div className="container mt-0">
  <div className="row">
    {cardData.map((card, index) => {
      const IconComponent = card.Icon; // Get the icon component
      return (
        <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card text-center rounded-0 border-0">
            <div className="card-body">
              <h5 className="card-title">
                {/* Render the icon if it exists */}
                {IconComponent ? <IconComponent size={120} color="#B28564" /> : null}
              </h5>
              <h5 className="card-text">{card.title}</h5>
              <p>{card.text}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

    </>
  );
};
