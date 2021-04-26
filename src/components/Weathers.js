import React, { useState, useRef, useEffect } from 'react';
import { Row, Radio } from 'antd';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WeatherCard from './WeatherCard';
import { fetchWeatherData } from '../actions/weather';

const weatherData = [
  {
    id: 1,
    location: 'Munich',
    date: '4th January, 2021',
    temp: 30,
    humidity: 4,
    wind: 34,
  },
  {
    id: 2,
    location: 'Munich',
    date: '4th January, 2021',
    temp: 30,
    humidity: 4,
    wind: 34,
  },
  {
    id: 3,
    location: 'Munich',
    date: '4th January, 2021',
    temp: 30,
    humidity: 4,
    wind: 34,
  },
  {
    id: 4,
    location: 'Munich',
    date: '4th January, 2021',
    temp: 30,
    humidity: 4,
    wind: 34,
  },
  {
    id: 5,
    location: 'Munich',
    date: '4th January, 2021',
    temp: 30,
    humidity: 4,
    wind: 34,
  },
];

// eslint-disable-next-line no-shadow
const Weathers = ({ weather, fetchWeatherData }) => {
  const [unit, setUnit] = useState('celsius');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const cardRef = useRef();

  const handleChangeUnit = (e) => {
    setUnit(e.target.value);
  };

  const scroll = (scrollOffset) => {
    cardRef.current.scrollLeft += scrollOffset;
    const leftArrowStatus = cardRef.current.scrollLeft === 0;
    const rightArrowStatus =
      cardRef.current.offsetWidth + cardRef.current.scrollLeft ===
      cardRef.current.scrollWidth;
    setShowLeftArrow(!leftArrowStatus);
    setShowRightArrow(!rightArrowStatus);
  };

  useEffect(async () => {
    await fetchWeatherData();
    console.log('state weather', weather);
  }, []);

  return (
    <div>
      <div className="radios">
        <Radio.Group onChange={handleChangeUnit} value={unit}>
          <Radio value="celsius">Celsius</Radio>
          <Radio value="fahrenheit">Fahrenheit</Radio>
        </Radio.Group>
      </div>
      <div className="navArrow">
        <BsArrowLeft
          size={40}
          onClick={() => scroll(-300)}
          style={{ visibility: showLeftArrow ? 'visible' : 'hidden' }}
        />
        <BsArrowRight
          size={40}
          onClick={() => scroll(300)}
          style={{ visibility: showRightArrow ? 'visible' : 'hidden' }}
        />
      </div>
      <Row gutter={16} className="scrolling-wrapper-flexbox" ref={cardRef}>
        {weatherData.map(({ id, location, temp, date, humidity, wind }) => (
          <WeatherCard
            key={id}
            location={location}
            temp={temp}
            date={date}
            humidity={humidity}
            wind={wind}
          />
        ))}
      </Row>
    </div>
  );
};

Weathers.propTypes = {
  weather: PropTypes.object.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ weather }) => ({
  weather,
});

export default connect(mapStateToProps, { fetchWeatherData })(Weathers);
