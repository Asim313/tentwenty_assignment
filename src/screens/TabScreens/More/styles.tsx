import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';
import {mvs} from '../../../config/metrices';

// define your styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.background,
  },
  mainContainer: {
    paddingHorizontal: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  status: {
    fontSize: mvs(16),
    fontFamily: 'Poppins-Medium',
    color: Colors.title,
  },
});
