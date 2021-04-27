import React from 'react';
import { Card, Col, Row } from 'antd';

const WeatherCardSkeleton = () => {
  return (
    <Row gutter={16} className="scrolling-wrapper-flexbox">
      <Col xs={24} md={12} lg={8} className="card">
        <Card className="cardSkeleton" loading />
      </Col>
      <Col xs={24} md={12} lg={8} className="card">
        <Card className="cardSkeleton" loading />
      </Col>
      <Col xs={24} md={12} lg={8} className="card">
        <Card className="cardSkeleton" loading />
      </Col>
    </Row>
  );
};

export default WeatherCardSkeleton;
