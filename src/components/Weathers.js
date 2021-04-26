import React, { useState, useRef, useEffect } from 'react';
import { Row, Radio } from 'antd';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import WeatherCard from './WeatherCard';
import { fetchWeatherData } from '../actions/weather';

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
  }, [weather]);

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
        {weather.map(
          ({ id, location, temp, date, humidity, wind, current }) => (
            <WeatherCard
              key={id}
              location={location}
              temp={temp}
              date={<Moment date={date} format="Do MMMM, YYYY" />}
              humidity={humidity}
              wind={wind}
              current={current}
            />
          )
        )}
      </Row>
    </div>
  );
};

Weathers.propTypes = {
  weather: PropTypes.array.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ weather }) => ({
  weather,
});

export default connect(mapStateToProps, { fetchWeatherData })(Weathers);
