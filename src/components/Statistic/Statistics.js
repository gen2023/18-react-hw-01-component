import React from 'react';
import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import './Statistics.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsList key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = { title: '' };
Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};

export default Statistics;
