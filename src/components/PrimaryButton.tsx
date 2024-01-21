//import libraries
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';
import {Play} from '../../assets/svgs';

interface PrimaryButtonProps {
  trans?: boolean;
  title?: string;
  loading?: boolean;
  onPress: () => void;
}

// create a component
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  trans = false,
  title = 'Title',
  loading = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: trans ? 'transparent' : Colors.primary,
      }}>
      {trans && !loading && <Play />}
      {loading ? (
        <ActivityIndicator color={Colors.white} size={'small'} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: mvs(50),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: mvs(10),
    marginTop: mvs(10),
    borderWidth: 1,
    borderColor: Colors.primary,
    flexDirection: 'row',
    gap: mvs(8),
  },
  title: {
    fontSize: mvs(14),
    fontFamily: 'Poppins-Bold',
    color: Colors.white,
  },
});

//make this component available to the app
export default PrimaryButton;
