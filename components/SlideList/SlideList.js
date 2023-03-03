import {FlatList, Text} from 'react-native';
import React from 'react';
import SlideCard from '../SlideCard/SlideCard';
import styles from './SlideList.style';
import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

const SlideList = props => {
  const {content, width, height, title, header} = props;
  return (
    <>
      {header && <Text style={styles.header}>{header}</Text>}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={content}
        keyExtractor={(movieItem, index) => {
          return movieItem.id;
        }}
        renderItem={itemData => (
          <SlideCard
            width={width}
            height={height}
            imgEndpointUrl={itemData.item.poster_path}
            title={title}
            name={itemData.item.title}
          />
        )}
      />
    </>
  );
};

SlideList.propTypes = propTypes;

export default SlideList;
