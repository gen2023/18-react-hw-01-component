import React from 'react';
import PropTypes from 'prop-types';

const StatisticsList = ({ id, label, percentage }) => {
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

StatisticsList.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsList;
