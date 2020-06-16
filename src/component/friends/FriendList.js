import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <section className="friend">
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline }) => (
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf.isRequired,
};

export default FriendList;
