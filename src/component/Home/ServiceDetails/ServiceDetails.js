import React from "react";
import { Link } from "react-router-dom";
import "./ServiceDetails.css";
// import ReactDOM from 'react-dom'
import { useSpring, animated } from "react-spring";
// import './styles.css'

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const ServiceDetails = ({ service }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="col-md-4 col-sm-6 my-3 d-flex justify-content-center">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Link to={`/placeService/${service._id}`}>
          <div className="card card-style" style={{ width: "18rem" }}>
            <img
              style={{ width: "50px" }}
              className="card-img-top align-self-center"
              src={`data:image/jpeg;base64,${service.image.img}`}
            />
            <div className="card-body text-center">
              <h5 style={{ fontWeight: "600" }} className="card-title">
                {service.title}
              </h5>
              <p className="card-text text-secondary">{service.description}</p>
            </div>
          </div>
        </Link>
      </animated.div>
    </div>
  );
};

export default ServiceDetails;
