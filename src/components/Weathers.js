import React, { useState, useRef, useEffect } from 'react';
import { Row, Radio, Alert } from 'antd';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import WeatherCard from './WeatherCard';
import { fetchWeatherData } from '../actions/weather';
import { updateWeatherUnit } from '../actions/unit';
import { chooseCurrentView } from '../actions/current-weather';
import WeatherCardSkeleton from './WeatherCardSkeleton';

const Weathers = ({
  weather,
  current,
  unit,
  alert,
  fetchWeatherData,
  chooseCurrentView,
  updateWeatherUnit
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [loading, setLoading] = useState(true);
  const cardRef = useRef();

  const handleChangeUnit = (e) => {
    updateWeatherUnit(e.target.value);
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

  const handleCardClick = (data) => {
    const [clickedCard] = weather.filter((e) => e.id === data);
    clickedCard.current = true;

    chooseCurrentView(clickedCard);
  };

  const displayWeatherCard = () => {
    return (
      <Row gutter={16} className="scrolling-wrapper-flexbox" ref={cardRef}>
        {weather.map(({ id, location, temp, date, humidity, wind }) => (
          <WeatherCard
            key={id}
            id={id}
            location={location}
            temp={temp}
            date={<Moment date={date} format="Do MMMM, YYYY" />}
            humidity={humidity}
            wind={wind}
            current={current.id === id}
            unit={unit}
            onClick={handleCardClick}
          />
        ))}
      </Row>
    );
  };

  useEffect(async () => {
    await fetchWeatherData();
    setLoading(false);
  }, []);

  return (
    <div>
      {alert.show && (
        <Alert
          message={alert.message}
          description={alert.description}
          type={alert.type}
          showIcon
          closable
        />
      )}

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
      {loading ? <WeatherCardSkeleton /> : displayWeatherCard()}
    </div>
  );
};

Weathers.propTypes = {
  current: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
  weather: PropTypes.array.isRequired,
  unit: PropTypes.string.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
  chooseCurrentView: PropTypes.func.isRequired,
  updateWeatherUnit: PropTypes.func.isRequired
};

const mapStateToProps = ({ weather, current, unit, alert }) => ({
  weather,
  current,
  unit,
  alert
});

export default connect(mapStateToProps, {
  fetchWeatherData,
  chooseCurrentView,
  updateWeatherUnit
})(Weathers);
