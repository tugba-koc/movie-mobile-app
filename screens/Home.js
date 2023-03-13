import {
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../services';
import SlideList from '../components/SlideList/SlideList';

const win = Dimensions.get('screen');

const Home = () => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [familyMovie, setFamilyMovie] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [errorText, setErrorText] = useState('');
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
    ]);
  };

  useEffect(() => {
    setLoaded(true);
    getData()
      .then(([upcomingMovie, popularMovie, popularTv, familyMovie]) => {
        setUpcomingMovie(upcomingMovie);
        setPopularMovie(popularMovie);
        setPopularTv(popularTv);
        setFamilyMovie(familyMovie);
      })
      .catch(error => setErrorText('An error occured in the server.'))
      .finally(() => {
        setLoaded(false);
      });
  }, []);

  return (
    <SafeAreaView>
      {!loaded ? (
        <ScrollView>
          {/* Upcoming movies */}
          <SlideList
            width={win.width}
            height={win.height / 2}
            content={upcomingMovie}
            title="Upcoming"
            error={errorText}
          />
          {/* Popular movies */}
          <SlideList
            width={win.width / 3}
            height={200}
            content={popularMovie}
            header="Popular Movies"
            error={errorText}
          />
          {/* Popular tv */}
          <SlideList
            width={win.width / 3}
            height={200}
            content={popularTv}
            header="Popular Tv"
            error={errorText}
          />
          {/* Family movies */}
          <SlideList
            width={win.width / 3}
            height={200}
            content={familyMovie}
            header="Family Movies"
            error={errorText}
          />
        </ScrollView>
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </SafeAreaView>
  );
};

export default Home;
