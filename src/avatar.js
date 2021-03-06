import React from 'react';
import PropTypes from 'prop-types';

function Avatar({hash}) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return(
    <img src={url}
      className="avatar"
      alt="avatar" />
  );
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
};

export default Avatar;
