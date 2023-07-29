import { useEffect, useState, useMemo,useCallback } from "react";

export default function Calculation({
  selectedCar,
  pickupCity,
  dropOffCity,
  pickupDate,
  dropOffDate,
  pickupTime,
  dropOffTime,
  setSelectedCar,
}) {
  // const [result, setResult] = useState(0);
  const [order, setOrder] = useState(false);
  const [show, setShow] = useState(false);
  const [hoursStr, minutesStr] = pickupTime?.split("-");
  const [dropHoursStr, dropMinuteStr] = dropOffTime?.split("-");
  const PickupHours = parseInt(hoursStr, 10);
  const PickUpMinutes = parseInt(minutesStr, 10);
  const dropHours = parseInt(dropHoursStr, 10);
  const dropMinutes = parseInt(dropMinuteStr, 10);
  pickupDate?.setHours(PickupHours);
  pickupDate?.setMinutes(PickUpMinutes);
  dropOffDate?.setHours(dropHours);
  dropOffDate?.setMinutes(dropMinutes);

  const formatDate = (date) => {
    return date?.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
    });
  };

  // Использование функции formatDate для форматирования дат
  const formattedPickupDate = formatDate(pickupDate);
  const formattedDropOffDate = formatDate(dropOffDate);

  const currentDate = useMemo(() => new Date(), []);
  const isPastDate =
    pickupDate < currentDate ||
    dropOffDate < currentDate ||
    dropOffDate < pickupDate;
  const timeDifference = dropOffDate - pickupDate;
  const hoursDifference = Math.round(timeDifference / (1000 * 60 * 60));
  const result = Number(selectedCar?.price) * hoursDifference;
  useEffect(() => {
    if (
      selectedCar &&
      pickupCity &&
      dropOffCity &&
      pickupDate &&
      dropOffDate &&
      pickupTime &&
      dropOffTime &&
      pickupDate >= currentDate &&
      dropOffDate >= currentDate &&
      dropOffDate >= pickupDate
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [
    selectedCar,
    pickupCity,
    dropOffCity,
    pickupDate,
    dropOffDate,
    pickupTime,
    dropOffTime,
    currentDate,
  ]);
  const reset = useCallback(() => {
    setShow(false);
    setSelectedCar(null);
    setOrder(false);
  }, [setShow, setSelectedCar, setOrder]); 
  useEffect(() => {
    if(order){
      setTimeout(() => {
        reset();
      }, 5000);
    }
 
  },[order,reset]);
  return (
    <div>
      <div className="calculation-info">
        <h2 className={selectedCar ? "selected-car-title" : "incorrect"}>
          {!selectedCar ? "Please select a car" : selectedCar?.model}{" "}
        </h2>
        <h3>
          <p
            className={
              pickupCity && dropOffCity ? "city-select correct" : "incorrect"
            }
          >
            {!pickupCity
              ? "Select rental city"
              : pickupCity
              ? `${pickupCity} \u{2794} `
              : ""}{" "}
            {!dropOffCity ? "Select drop-off city" : dropOffCity}
          </p>
        </h3>
        <p
          className={
            pickupDate && dropOffDate ? "pickup-date-title" : "incorrect"
          }
        >
          {!pickupDate ? (
            "Please select date"
          ) : isPastDate ? (
            <span>Please choise correct date</span>
          ) : formattedPickupDate ? (
            `${formattedPickupDate} \u{2794} ${formattedDropOffDate}`
          ) : (
            ""
          )}
        </p>
        {/* <p
          className={
            pickupTime && dropOffTime ? "pickup-date-title" : "incorrect"
          }
        >
          {pickupDate?.getTime() === dropOffDate?.getTime() &&
          Number(pickupTime?.replace("-", "")) >
            Number(dropOffTime?.replace("-", ""))
            ? "You select incorrect time"
            : `${pickupTime} - ${dropOffTime}`}
        </p> */}

        <div className="result">
          <h2>{show ? `${result} $` : ""}</h2>
          {show && (
            <button className="rent" onClick={() => setOrder(!order)}>
              Rent
            </button>
          )}

          <div
            className="order"
            style={order ? { display: "block" } : { display: "none" }}
          >
            <div onClick={reset} className="order-box">
              <form>
                <i className="fa-solid fa-check"></i>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
