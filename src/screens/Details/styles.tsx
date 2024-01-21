import {StyleSheet} from 'react-native';
import Colors from '../../config/colors';
import {mvs} from '../../config/metrices';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    height: mvs(466),
    width: '100%',
  },
  topContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: mvs(40),
    paddingVertical: mvs(12),
  },
  linearTop: {
    height: mvs(164),
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  linearBottom: {
    height: mvs(360),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    paddingHorizontal: mvs(66),
    justifyContent: 'flex-end',
    paddingBottom: mvs(34),
  },
  date: {
    fontSize: mvs(16),
    fontFamily: 'Poppins-Medium',
    color: Colors.white,
    alignSelf: 'center',
  },
  label: {
    fontSize: mvs(16),
    fontFamily: 'Poppins-Medium',
    color: Colors.title,
    marginTop: mvs(15),
  },
  des: {
    fontSize: mvs(12),
    fontFamily: 'Poppins-Regular',
    color: Colors.gray,
    lineHeight: mvs(19.2),
  },
  divider: {
    borderTopWidth: 1,
    borderColor: '#000',
    width: '100%',
    opacity: 0.05,
    marginTop: mvs(24),
  },
  genreContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: mvs(5),
    flexWrap: 'wrap',
    marginTop: mvs(14),
  },
  genre: {
    paddingHorizontal: mvs(10),
    paddingTop: mvs(2),
    borderRadius: mvs(50),
    backgroundColor: Colors.bottom,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreText: {
    fontSize: mvs(12),
    fontFamily: 'Poppins-Medium',
    color: Colors.white,
    lineHeight: mvs(20),
  },
  content: {
    paddingBottom: mvs(100),
  },
  logo: {
    alignSelf: 'center',
  },
  doneButton: {
    height: mvs(30),
    width: mvs(60),
    borderRadius: mvs(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    position: 'absolute',
    zIndex: 1,
    top: mvs(20),
    right: mvs(20),
  },
  doneText: {
    fontSize: mvs(14),
    fontFamily: 'Poppins-Medium',
    color: Colors.white,
  },
  title: {
    fontSize: mvs(24),
    fontFamily: 'Poppins-MediumItalic',
    color: Colors.white,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
