// import libraries
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';
import {Back, BackWhite, Search} from '../../assets/svgs';
import SearchBar from './SearchBar';

interface HeaderProps {
  title?: string;
  search?: boolean;
  onReset?: () => void;
  searchText?: string;
  setSearchText?: (text: string) => void;
  onSearch?: () => void;
  showSearch?: boolean;
  back?: boolean;
  white?: boolean;
  onBack?: () => void;
}

// create a component
const Header: React.FC<HeaderProps> = ({
  title = 'Watch',
  search = false,
  onReset = () => {},
  searchText,
  setSearchText,
  onSearch,
  showSearch = false,
  back = false,
  white = false,
  onBack,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: white ? 'transparent' : Colors.white,
        borderWidth: white ? 0 : 1,
        position: white ? 'absolute' : 'relative',
      }}>
      {!search && (
        <View style={styles.titleContainer}>
          {back && (
            <Pressable onPress={onBack} style={styles.backContainer}>
              {white ? <BackWhite /> : <Back />}
            </Pressable>
          )}
          <Text
            style={{
              ...styles.title,
              color: white ? Colors.white : Colors.title,
            }}>
            {title}
          </Text>
        </View>
      )}
      {!search && showSearch && (
        <Pressable onPress={onSearch} style={styles.searchIcon}>
          <Search height={mvs(19)} width={mvs(19)} />
        </Pressable>
      )}
      {search && (
        <SearchBar
          onReset={onReset}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //height: mvs(64),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(20),
    borderWidth: 1,
    borderColor: '#EFEFEF',
    zIndex: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: mvs(15),
  },
  backContainer: {
    height: mvs(30),
    width: mvs(30),
    justifyContent: 'center',
  },
  title: {
    fontSize: mvs(16),
    fontFamily: 'Poppins-Medium',
    color: Colors.title,
  },
  searchIcon: {
    height: mvs(36),
    width: mvs(36),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: mvs(13),
  },
});

// make this component available to the app
export default Header;
