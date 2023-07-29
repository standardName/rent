import React, { useState } from "react";
const filterButtons = [
  { name: "Premium", id: 0 },
  { name: "Coupe", id: 1 },
  { name: "Hypercars", id: 2 },
  { name: "Sportcars", id: 3 },
  { name: "Cabriolet", id: 4 },
  { name: "Limousines", id: 5 },
];
export default function SectionThreeFilters({ handleCarsFilter }) {
  const [active,setActive] = useState(null)
  function handleButton(el){
    handleCarsFilter(el.name.toLowerCase())
setActive(el.id)
  }
  console.log(active)
  return (
    <div className="section-three-filter">
      {filterButtons.map((el) => {
        return (
          <button
         
            key={el.id}
            onClick={()=>handleButton(el) }
            className={active===el.id?'section-three-filter-button active-btn': 'section-three-filter-button'}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
}
