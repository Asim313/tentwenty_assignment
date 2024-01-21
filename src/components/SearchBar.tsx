//import libraries
import React from 'react';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import {Close, Search} from '../../assets/svgs';
import Colors from '../config/colors';
import {mvs} from '../config/metrices';

interface SearchBarProps {
  onReset: () => void;
  searchText: string | undefined;
  setSearchText?: ((text: string) => void) | undefined;
}

// create a component
const SearchBar: React.FC<SearchBarProps> = ({
  onReset,
  searchText,
  setSearchText,
}) => {
  return (
    <View style={{...styles.container}}>
      <Search height={24} width={24} />
      <TextInput
        placeholder={'TV shows, movies and more'}
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor={Colors.gray}
        style={styles.input}
      />
      <Pressable onPress={onReset}>
        <Close height={30} width={30} />
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: mvs(52),
    backgroundColor: Colors.background,
    borderRadius: mvs(52 / 2),
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 12,
    flex: 1,
    color: Colors.title,
    fontFamily: 'Poppins-Regular',
  },
});

// make this component available to the app
export default SearchBar;
