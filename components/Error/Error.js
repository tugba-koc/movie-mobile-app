import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.style';

const propTypes = {
  error: PropTypes.string,
};

const Error = props => {
  const {error} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

Error.propTypes = propTypes;

export default Error;
