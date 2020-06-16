import React from 'react';
import Profile from './profile';
import Statistics from './statistic';
import FriendList from './friends';
import TransactionHistory from './transaction';

import user from '../json/user.json';
import statisticalData from '../json/statistical-data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

import '../style.css';

const App = () => {
  return (
    <div className="content">
      <div className="contentLeft">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
      </div>
      <div className="contentRight">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
