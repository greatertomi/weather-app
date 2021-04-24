import React from 'react';
import { Card, Col } from 'antd';
import { WiHumidity, WiSandstorm, WiThermometer } from 'react-icons/wi';
import PropTypes from 'prop-types';

const loading = false;

const WeatherCard = ({ location, date, temp, humidity, wind }) => {
  return (
    <Col xs={24} md={12} lg={8} className="card">
      <Card className="weatherCard" loading={loading}>
        <h1>{location}</h1>
        <div id="subTitle">{date}</div>
        <div id="tempDiv">
          <div>
            <span id="temp">{temp}</span>
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
            <div>{humidity}% Humidity</div>
          </div>
          <div>
            <WiSandstorm size={50} />
            <div>{wind} km/h Wind</div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

WeatherCard.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherCard;
