import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 22,
    lineHeight: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  sliderContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  movieName: {
    position: 'absolute',
    textAlign: 'center',
    bottom: 10,
  },
});
