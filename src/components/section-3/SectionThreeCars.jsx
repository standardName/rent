import { useState } from "react";

export default function SectionThreeCars({ sortCarrs, secondCars }) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <>
      <div className="section-three-cars">
        {loading ? (
          <div className="loader"></div>
        ) : (
          sortCarrs.map((el) => {
            return (
              <div className="car-img-container" key={el.id}>
                <img
                  src={el.img}
                  alt={el.type}
                  className="section-three-cars-img"
                />
              </div>
            );
          })
        )}
      </div>
      <div className="second-cars-container">
        {secondCars.map((el) => {
          return (
            <div className="second-cars">
              <img src={el.img} alt={el.type} />
            </div>
          );
        })}
      </div>
    </>
  );
}
