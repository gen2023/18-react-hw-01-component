import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItems from './TransactionHistoryItems';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  return (
    <section>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ type, amount, currency }) => (
            <TransactionHistoryItems
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};

export default TransactionHistory;
