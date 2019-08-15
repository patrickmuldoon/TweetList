import React from 'react'
import PropTypes from 'prop-types';
import Avatar from './avatar';
import NameWithHandle from './nameWithHandle';
import Time from './time';
import Message from './message';
import ReplyButton from './replyButton';
import RetweetButton from './retweetButton';
import LikeButton from './likeButton';
import MoreOptionsButton from './moreOptionsButton';


function Tweet({tweet}) {
  return(
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired
    }).isRequired,
    timestamp: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    retweets: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

export default Tweet;
