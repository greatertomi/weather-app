import React, { useState, useRef, useEffect } from 'react';
import { Row, Radio } from 'antd';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import WeatherCard from './WeatherCard';
import { fetchWeatherData } from '../actions/weather';
import { chooseCurrentView } from '../actions/current-weather';
import WeatherCardSkeleton from './WeatherCardSkeleton';

// eslint-disable-next-line no-shadow
const Weathers = ({
  weather,
  current,
  fetchWeatherData,
  chooseCurrentView
}) => {
  const [unit, setUnit] = useState('celsius');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [loading, setLoading] = useState(true);
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
  weather: PropTypes.array.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
  chooseCurrentView: PropTypes.func.isRequired
};

const mapStateToProps = ({ weather, current }) => ({
  weather,
  current
});

export default connect(mapStateToProps, {
  fetchWeatherData,
  chooseCurrentView
})(Weathers);
