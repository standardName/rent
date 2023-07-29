import suv from "../img/suv.png";
import van from "../img/vun.png";
import premium from "../img/premium.png";
import pickup from "../img/pickup.png";
import economy from "../img/economy.png";
const cars = [
  { type: "Economy", price: 5, img: economy, model: "Toyota  Aqua" },
  { type: "Van", price: 7, img: van, model: " Ford Grand C-Max" },
  { type: "Premium", price: 10, img: premium, model: "Nissan Teana" },
  { type: "Pickup", price: 12, img: pickup, model: "Tacoma Access " },
  { type: "SUV", price: 10, img: suv, model: "Hundai Tucson" },
];

export default function Cars({ setSelectedCar, selectedCar }) {
  return (
    <div className="cars">
      {cars.map((el, i) => {
        return (
          <div
            className={selectedCar?.type === el.type ? "car car-active" : "car"}
            key={i}
            onClick={() => setSelectedCar(cars[i])}
          >
            <div className="img-box">
              {" "}
              <img className="car-img" src={el.img} alt={el.type} />
            </div>

            <p className="car-type">{el.type}</p>
            <p className="car-rent-price">
              {`${el.price}+$ `} <br />
              <span className="tariff">per hour</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
