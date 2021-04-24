import React, { useState, useRef } from 'react';
import { Row, Radio } from 'antd';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import WeatherCard from './WeatherCard';

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
];

const Weathers = () => {
  const [unit, setUnit] = useState('celsius');
  const [showLeftArrow, setShowLeftArrow] = useState(true);
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
          onClick={() => scroll(-200)}
          style={{ visibility: showLeftArrow ? 'visible' : 'hidden' }}
        />
        <BsArrowRight
          size={40}
          onClick={() => scroll(200)}
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

export default Weathers;
