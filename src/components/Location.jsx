import { useState } from "react";

const cities = [
  { city: "London", country: "England, UK" },
  { city: "Amsterdam", country: "Netherlands" },
  { city: "Vienna", country: "Switzerland" },
  { city: "Zurich", country: "Switzerland" },
  { city: "Edinburgh", country: "Schotland, UK" },
];

export default function Location({ use, setSelectedCity, selectedCity }) {
  const [showCity, setShowCity] = useState(false);

  function handleSelectCity(city) {
    setSelectedCity(city);
    setShowCity(false);
  }
  return (
    <>
      <label>{use}</label>
      <div className="location">
        <i className="fa-solid fa-location-dot input-dot"></i>
        <input
          type="text"
          placeholder="Select City"
          onClick={() => setShowCity(!showCity)}
          defaultValue={selectedCity}
          className={showCity ? "location-input active" : "location-input"}
        />
        {showCity && (
          <div className="cities">
            {cities.map((el,i) => {
              return (
                <span key={i}
                  className="city"
                  onClick={() => handleSelectCity(el.city)}
                >
                  <i className="fa-solid fa-city"></i>
                  {el.city}
                  <br />
                  <span className="country">{el.country}</span>
                </span>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
