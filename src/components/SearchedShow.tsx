//import libraries
import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';
import {Option} from '../../assets/svgs';
import services from '../../services/api/services';
import FastImage from 'react-native-fast-image';

interface SearchedShowProps {
  item: {title: string; poster_path: string};
  onPress: () => void;
}

// create a component
const SearchedShow: React.FC<SearchedShowProps> = ({item, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri: `${services.image_url}${item?.poster_path}`,
          priority: FastImage.priority.high,
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.type}>{'Fantasy'}</Text>
      </View>
      <Pressable style={styles.option}>
        <Option height={mvs(4)} width={mvs(20)} />
      </Pressable>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: mvs(21),
    alignItems: 'center',
    marginTop: mvs(20),
  },
  image: {
    height: mvs(100),
    width: mvs(130),
    borderRadius: mvs(10),
    backgroundColor: Colors.lightgray
  },
  title: {
    fontSize: mvs(16),
    fontFamily: 'Poppins-Medium',
    color: Colors.title,
  },
  type: {
    fontSize: mvs(12),
    fontFamily: 'Poppins-Medium',
    color: Colors.lightgray,
  },
  option: {
    position: 'absolute',
    right: 0,
  },
  info: {
    width: '50%',
  },
});

//make this component available to the app
export default SearchedShow;
