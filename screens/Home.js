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
import Error from '../components/Error/Error';

const win = Dimensions.get('screen');

const Home = ({navigation}) => {
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
    setLoaded(false);
    getData()
      .then(([upcomingMovie, popularMovie, popularTv, familyMovie]) => {
        setUpcomingMovie(upcomingMovie);
        setPopularMovie(popularMovie);
        setPopularTv(popularTv);
        setFamilyMovie(familyMovie);
      })
      .catch(() => setErrorText('An error occured in the server.'))
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <SafeAreaView>
      {!loaded ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : !errorText ? (
        <ScrollView>
          {/* Upcoming movies */}
          <SlideList
            navigation={navigation}
            width={win.width}
            height={win.height / 2}
            content={upcomingMovie}
            title="Upcoming"
          />
          {/* Popular movies */}
          <SlideList
            navigation={navigation}
            width={win.width / 3}
            height={200}
            content={popularMovie}
            header="Popular Movies"
          />
          {/* Popular tv */}
          <SlideList
            navigation={navigation}
            width={win.width / 3}
            height={200}
            content={popularTv}
            header="Popular Tv"
          />
          {/* Family movies */}
          <SlideList
            navigation={navigation}
            width={win.width / 3}
            height={200}
            content={familyMovie}
            header="Family Movies"
          />
        </ScrollView>
      ) : (
        <Error error={errorText} />
      )}
    </SafeAreaView>
  );
};

export default Home;
