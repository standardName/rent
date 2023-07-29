import { useState,useEffect } from "react";
import SectionThreeCars from "./components/section-3/SectionThreeCars";
import SectionThreeFilters from "./components/section-3/SectionThreeFilters";
import "./components/section-3/section3.css";
import SectionThreeInfo from "./components/section-3/sectionThreeInfo";
export default function SectionThree() {
  const cars = [
    { type: "premium", img: "https://tinyurl.com/wyhvvdvp", id: 0 },
    { type: "premium", img: "https://tinyurl.com/yckpb8su", id: 1 },
    { type: "premium", img: "https://tinyurl.com/2xz7fft4", id: 2 },
    { type: "coupe", img: "https://rb.gy/9h7ln", id: 3 },
    { type: "coupe", img: "https://tinyurl.com/mr32xw5t", id: 4 },
    { type: "hypercars", img: "https://tinyurl.com/354yxjbp", id: 5 },
    { type: "hypercars", img: "https://tinyurl.com/3h8fefmj", id: 6 },
    { type: "sportcars", img: "https://tinyurl.com/mrxd6xpb", id: 7 },
    { type: "sportcars", img: "https://rb.gy/jxxk3", id: 8 },
    { type: "cabriolet", img: "https://rb.gy/eidq4", id: 9 },
    { type: "cabriolet", img: "https://rb.gy/qtckc", id: 10 },
    { type: "cabriolet", img: "https://tinyurl.com/mr3bp9h6", id: 11 },
    { type: "limousines", img: "https://tinyurl.com/2uckuat6", id: 12 },
  ];
  const [sort, setSort] = useState([...cars.slice(0, 2)]);
  const [secondCars, setSecondCars] = useState(cars);
  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  let filtercars;
  let secondFiltersCars;
  function handleCarsFilter(arg) {
    filtercars = cars.filter((el) => el.type === arg);
    secondFiltersCars = cars.filter((el) => el.type !== arg);
    setSort([...filtercars]);
    const numberOfElements = 4;
    const startIndex = Math.floor(Math.random() * (secondFiltersCars.length - numberOfElements + 1));
    const selectedElements = secondFiltersCars.slice(startIndex, startIndex + numberOfElements);
    
    setSecondCars([...selectedElements]);
    
 
  }

  useEffect(() => {
    // Функция для асинхронной загрузки картинок
    async function loadImagesAsync() {
      try {
        const promises = cars.map((car) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = car.img;
            img.onload = () => resolve();
            img.onerror = (error) => reject(error);
          });
        });

        // Дожидаемся, пока все картинки загрузятся
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    }

    loadImagesAsync();
  }, [cars]);
  if (!imagesLoaded) {
    // Можно отобразить какой-то загрузочный элемент, пока картинки загружаются
    return <div>Loading...</div>;
  }

  return (
    <div className="section-three">
      <SectionThreeInfo />
      <SectionThreeFilters
        handleCarsFilter={handleCarsFilter}
       
      />
      <SectionThreeCars sortCarrs={sort} secondCars={secondCars} />
    </div>
  );
}
