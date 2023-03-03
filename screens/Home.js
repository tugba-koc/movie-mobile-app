import {Text, SafeAreaView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPopularMovies, getUpcomingMovies} from '../services';
import SlideList from '../components/SlideList/SlideList';

const win = Dimensions.get('screen');

const Home = () => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    getUpcomingMovies()
      .then(results => setUpcomingMovie(results))
      .catch(error => setErrorText('An error occured in the server.'));

    getPopularMovies()
      .then(results => setPopularMovie(results))
      .catch(error => setErrorText('An error occured in the server.'));
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
      {/* Upcoming movies */}
      <SlideList
        width={win.width}
        height={win.height / 2}
        content={upcomingMovie}
        title="Upcoming"
      />
      {/* Popular movies */}
      <SlideList
        width={win.width / 3}
        height={200}
        content={popularMovie}
        header="Popular Movies"
      />
    </SafeAreaView>
  );
};

export default Home;
