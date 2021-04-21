import React from "react";
import { Card, Col } from "antd";
import { WiHumidity, WiSandstorm, WiThermometer } from "react-icons/wi";

const loading = false;

const WeatherCard = () => {
  return (
    <Col xs={24} md={12} lg={8}>
      <Card className="weatherCard" loading={loading}>
        <h1>Munich</h1>
        <div id="subTitle">Mon. 4th January, 2021</div>
        <div id="tempDiv">
          <div>
            <span id="temp">30</span>
            <span id="unit">
              <span>o</span>
              <span>C</span>
            </span>
          </div>
          <div className="pt-2">
            <WiThermometer size={90} />
          </div>
        </div>
        <div id="otherStatsDiv">
          <div>
            <WiHumidity size={50} />
            <div>9% Humidity</div>
          </div>
          <div>
            <WiSandstorm size={50} />
            <div>23 km/h Wind</div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default WeatherCard;
