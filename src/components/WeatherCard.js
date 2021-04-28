import React from 'react';
import { Card, Col } from 'antd';
import { WiHumidity, WiSandstorm, WiThermometer } from 'react-icons/wi';
import PropTypes from 'prop-types';

const loading = false;

const WeatherCard = ({
  id,
  location,
  date,
  temp,
  humidity,
  wind,
  current,
  unit,
  onClick
}) => {
  return (
    <Col xs={24} md={12} lg={8} className="card">
      <Card
        className="weatherCard"
        loading={loading}
        style={{ border: current ? '1px solid #177ddc' : null }}
        onClick={() => onClick(id)}
      >
        <h1>{location}</h1>
        <div id="subTitle">{date}</div>
        <div id="tempDiv">
          <div>
            <span id="temp">{temp}</span>
            <span id="unit">
              <span>o</span>
              <span>{unit === 'celsius' ? 'C' : 'F'}</span>
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
  id: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  current: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default WeatherCard;
