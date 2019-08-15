import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './tweet';
import './index.css';

const TweetList = ({tweets}) => (
  <div className="tweet-list">
    <div className="tweets">
      {tweets.map(tweet =>
        <Tweet key={tweet.id} tweet={tweet}/>
      )}
    </div>
  </div>
);

const testTweets = [
  {
    id: 1,
    message: "Dogs are the best duh?",
    gravatar: "xyz",
    author: {
      handle: "dogPerson123",
      name: "I am a dog person"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2019-08-11 21:24:37"
  },
  {
    id: 2,
    message: "Cats are cool I gueess?",
    gravatar: "xyz",
    author: {
      handle: "catperson20",
      name: "I am a cat person"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2019-08-11 23:24:37"
  },
  {
    id: 3,
    message: "Roses are red, violets are blue. You're lame",
    gravatar: "xyz",
    author: {
      handle: "pattyMustard",
      name: "Patrick"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2019-08-11 23:24:37"
  },
  {
    id: 4,
    message: "Cats are cool I gueess?",
    gravatar: "xyz",
    author: {
      handle: "catperson20",
      name: "I am a cat person"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2019-08-11 23:24:37"
  },
  {
    id: 5,
    message: "React is fun",
    gravatar: "xyz",
    author: {
      handle: "reactJs",
      name: "reacting"
    },
    likes: 10,
    retweets: 79,
    timestamp: "2019-08-11 23:24:37"
  },
];

ReactDOM.render(
  <TweetList tweets={testTweets} />,
  document.getElementById('root')
);
