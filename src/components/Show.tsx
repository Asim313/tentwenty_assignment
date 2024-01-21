//import libraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import {mvs} from '../config/metrices';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../config/colors';
import services from '../../services/api/services';
import FastImage from 'react-native-fast-image';

interface ShowProps {
  item: {title: string; poster_path: string};
  onPress: () => void;
}

// create a component
const Show: React.FC<ShowProps> = ({item, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri: `${services.image_url}${item?.poster_path}`,
          priority: FastImage.priority.high,
        }}
        style={styles.background}
      />
      <LinearGradient
        style={styles.titleContainer}
        colors={['#00000000', '#000000']}>
        <Text style={styles.title}>{item?.title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: mvs(180),
    borderRadius: mvs(10),
    overflow: 'hidden',
    marginTop: mvs(20),
  },
  background: {
    flex: 1,
  },
  titleContainer: {
    height: mvs(70),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: mvs(20),
    justifyContent: 'center',
    //paddingTop: mvs(27),
  },
  title: {
    fontSize: mvs(18),
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
  },
});

//make this component available to the app
export default Show;
