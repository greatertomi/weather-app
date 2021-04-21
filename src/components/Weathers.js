import React from "react";
import WeatherCard from "./WeatherCard";
import { Row } from "antd";

const Weathers = () => {
  return (
    <div>
      <Row gutter={16}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </Row>
    </div>
  );
};

export default Weathers;
