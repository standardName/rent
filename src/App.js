import React from "react";
import "./App.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./components/section-4/SectionFour";
import SectionFive from "./components/section-5/SectionFive";
// import SectionThree from "./components/section-3/SectionThree";
// import SectionFour from "./components/section-4/SectionFour";
// import SectionFive from "./components/section-5/SectionFive";
export default function App() {
  return (
    <div className="App">
      <SectionOne />
      <SectionThree />
      <SectionTwo />

      <SectionFour />
      <SectionFive />
    </div>
  );
}
