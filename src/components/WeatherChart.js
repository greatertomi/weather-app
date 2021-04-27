import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import PropTypes from 'prop-types';
import { FcLineChart } from 'react-icons/fc';

/* const data = [
  {
    time: '01:00',
    temp: 20
  },
  {
    time: '05:00',
    temp: 30
  },
  {
    time: '09:00',
    temp: 10
  },
  {
    time: '12:00',
    temp: 40
  },
  {
    time: '15:00',
    temp: 25
  }
]; */

const WeatherChart = ({ current }) => {
  const [dayWeather, setDayWeather] = useState([]);

  useEffect(() => {
    setDayWeather(current.details);
  }, [current]);

  const displayChart = () => {
    return (
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          data={dayWeather}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" name="Temperature" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const emptyChart = () => {
    return (
      <div className="emptyChartDiv">
        <FcLineChart size={350} />
        <div className="noChartTxt">Click a card to show that day's chart</div>
      </div>
    );
  };

  return (
    <div className="chart-container">
      {dayWeather ? displayChart() : emptyChart()}
    </div>
  );
};

WeatherChart.propTypes = {
  current: PropTypes.object.isRequired
};

const mapStateToProps = ({ current }) => ({
  current
});

export default connect(mapStateToProps)(WeatherChart);
