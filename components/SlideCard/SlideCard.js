import {
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from 'react-native';
import styles from './SliderCard.style';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  imgEndpointUrl: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string,
};

const SlideCard = ({
  title,
  imgEndpointUrl,
  width,
  height,
  name,
  navigation,
  itemData,
}) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          movieItem: itemData,
        })
      }
      style={styles.container}>
      {title ? (
        <ImageBackground
          resizeMode="cover"
          style={{
            height: height,
            width: width,
            justifyContent: 'flex-end',
            borderRadius: 20,
          }}
          source={{
            uri: `${IMAGE_BASE_URL}${imgEndpointUrl}`,
          }}>
          <Text style={styles.text}>Upcoming</Text>
        </ImageBackground>
      ) : (
        <View style={styles.sliderContainer}>
          <Image
            resizeMode="cover"
            style={{
              height: height,
              width: width,
              justifyContent: 'flex-end',
              borderRadius: 20,
              margin: 4,
            }}
            source={
              imgEndpointUrl
                ? {
                    uri: `${IMAGE_BASE_URL}${imgEndpointUrl}`,
                  }
                : require('../../assets/images/placeholder.jpeg')
            }
          />
          {!imgEndpointUrl && <Text style={styles.movieName}>{name}</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
};

SlideCard.propTypes = propTypes;

export default SlideCard;
