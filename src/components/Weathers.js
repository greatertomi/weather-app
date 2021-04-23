import React, { useState, useRef } from "react";
import WeatherCard from "./WeatherCard";
import { Row, Radio } from "antd";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Weathers = () => {
  const [unit, setUnit] = useState("celsius");
  const cardRef = useRef();

  const handleChangeUnit = (e) => {
    setUnit(e.target.value);
  };

  const scroll = (scrollOffset) => {
    cardRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className="radios">
        <Radio.Group onChange={handleChangeUnit} value={unit}>
          <Radio value="celsius">Celsius</Radio>
          <Radio value="fahrenheit">Fahrenheit</Radio>
        </Radio.Group>
      </div>
      <div className="navArrow">
        <BsArrowLeft size={40} onClick={() => scroll(-200)} />
        <BsArrowRight size={40} onClick={() => scroll(200)} />
      </div>
      <Row gutter={16} className="scrolling-wrapper-flexbox" ref={cardRef}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </Row>
    </div>
  );
};

export default Weathers;
