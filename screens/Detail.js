import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getMovieDetail} from '../services';
import Error from '../components/Error/Error';
import SlideList from '../components/SlideList/SlideList';

const Detail = ({route}) => {
  const {movieItem} = route.params;
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    setLoaded(false);
    getMovieDetail(movieItem.id)
      .then(res => {
        setMovieDetail(res);
      })
      .catch(() => setError('An error occured in the server.'))
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <SafeAreaView>
      {!loaded ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : !error ? (
        <View>
          <Text>{movieDetail.title}</Text>
        </View>
      ) : (
        <Error error={error} />
      )}
    </SafeAreaView>
  );
};

export default Detail;
