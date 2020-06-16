import React from 'react';
import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import './Statistics.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ label, percentage }) => (
          <StatisticsList label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};

export default Statistics;
