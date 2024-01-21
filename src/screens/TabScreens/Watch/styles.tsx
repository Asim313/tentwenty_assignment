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
  },
  content: {
    paddingTop: mvs(10),
    paddingBottom: mvs(100),
  },
  columnWrapper: {
    gap: mvs(10),
    marginTop: mvs(10),
  },
  titleContainer: {
    paddingVertical: mvs(10),
    marginTop: mvs(20),
    borderBottomWidth: 1,
    borderColor: '#00000011',
    width:'100%',
  },
  result: {
    fontSize: mvs(12),
    fontFamily: 'Poppins-Medium',
    color: Colors.title,
  }
});
