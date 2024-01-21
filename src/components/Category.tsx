// import libraries
import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import services from '../../services/api/services';
import Colors from '../config/colors';
import {mvs, width} from '../config/metrices';
import FastImage from 'react-native-fast-image';

interface CategoryProps {
  item: {id: number; backdrop_path: string; name: string};
  onPress: (id: number) => void;
}

// create a component
const Category: React.FC<CategoryProps> = ({item, onPress}) => {
  return (
    <Pressable onPress={() => onPress(item?.id)} style={styles.container}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri: `${services.image_url}/${item?.backdrop_path}`,
          priority: FastImage.priority.high,
        }}
        style={styles.background}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item?.name}</Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: width / 3.5,
    width: '48%',
    borderRadius: mvs(10),
    overflow: 'hidden',
  },
  background: {
    flex: 1,
  },
  titleContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#00000050',
  },
  title: {
    fontSize: mvs(16),
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
    position: 'absolute',
    bottom: mvs(20),
    left: mvs(10),
  },
});

// make this component available to the app
export default Category;
