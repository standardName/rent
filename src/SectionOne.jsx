
import { useState } from "react";
import Header from "./components/Header";
import Rentform from "./components/Rentform";
import Form from "./components/Form";
import FormInfo from "./components/FormInfo";
import Cars from "./components/Cars";
import Calculation from "./components/Calculation";
import Location from "./components/Location";
import Date from "./components/Date";
import Time from "./components/Time";
function SectionOne() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickupCity, setPickupCity] = useState("");
  const [dropOffCity, setDropOffCity] = useState("");
  const [pickupDate, setPickupDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);
  const [pickupTime, setPickupTime] = useState('00-00');
  const [dropOffTime, setDropOffTime] = useState('00-00');
  // console.log(typeof(pickupDate));
  const handlePickupTimeChange = (time) => {
    setPickupTime(time);
  };

  const handleDropOffTimeChange = (time) => {
    setDropOffTime(time);
  };
  return (
    <div className="section-one">
      <Header />
      <Rentform>
        <Form>
          <Location
            use={"Pick-Up"}
            selectedCity={pickupCity}
            setSelectedCity={setPickupCity}
          />
          <Location
            use={"Drop-off"}
            selectedCity={dropOffCity}
            setSelectedCity={setDropOffCity}
          />
          <Date
            pickupDate={pickupDate}
            setPickupDate={setPickupDate}
            dropOffDate={dropOffDate}
            setDropOffDate={setDropOffDate}
          />
          <div className="time-box">
            <Time
              use="Pickup time"
              selectedTime={pickupTime}
              onTimeChange={handlePickupTimeChange}
            />
            <Time
              use="Drop-off time"
              selectedTime={dropOffTime}
              onTimeChange={handleDropOffTimeChange}
            />
          </div>
          {/* <div className="insurance">
            <label for="checkbox">Insurance</label>
          <input type="checkbox" id="checkbox" name="terms" value="agreed"/>
          </div> */}
        </Form>
        <FormInfo>
          <Cars setSelectedCar={setSelectedCar} selectedCar={selectedCar} />
          <Calculation
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
            pickupCity={pickupCity}
            dropOffCity={dropOffCity}
            pickupDate={pickupDate}
            dropOffDate={dropOffDate}
            pickupTime={pickupTime}
            dropOffTime={dropOffTime}
          />
        </FormInfo>
      </Rentform>
    </div>
  );
}

export default SectionOne;
