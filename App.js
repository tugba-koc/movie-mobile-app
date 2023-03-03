/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import getPopularMovies from './services';

const App = () => {
  const [movie, setMovie] = useState([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    getPopularMovies()
      .then(results => setMovie(results))
      .catch(error => setErrorText('there are server error'));
  }, []);

  if (errorText) {
    return (
      <SafeAreaView>
        <Text style={{color: 'red'}}>{errorText}</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Text>{movie?.original_title}</Text>
    </SafeAreaView>
  );
};

export default App;
