import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Date({ pickupDate,dropOffDate,setPickupDate,setDropOffDate}) {
    
    const handlePickupDateChange = (date) => {
      setPickupDate(date);
      };
     const handleDropOffDate=(date)=>{
      setDropOffDate(date)
     }
  return (
    <>
      <div className="dp-area">
        <label>Pick-up Date</label>

        <DatePicker
          selected={pickupDate}
          onChange={handlePickupDateChange}
          dateFormat="yyyy-MM-dd" // Формат отображения даты (можно настроить по своему)
          placeholderText="Выберите дату"
        />
        <i className="fa-solid fa-calendar-days"></i>
      </div>
      <div className="dp-area">
        <label>Drop-off Date</label>

        <DatePicker
          selected={dropOffDate}
          onChange={handleDropOffDate}
          dateFormat="yyyy-MM-dd" // Формат отображения даты (можно настроить по своему)
          placeholderText="Выберите дату"
        />
        <i className="fa-solid fa-calendar-days"></i>
      </div>
    </>
  );
}
