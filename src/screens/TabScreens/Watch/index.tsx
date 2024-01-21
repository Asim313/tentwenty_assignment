//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../../components/Header';
import {styles} from './styles';
import Show from '../../../components/Show';
import Category from '../../../components/Category';
import SearchedShow from '../../../components/SearchedShow';
import API from '../../../../services/api/API';
import Loader from '../../../components/Loader';
import genres from '../../../../services/utils/mock';
import {useIsFocused} from '@react-navigation/native';
import {mvs} from '../../../config/metrices';

const Watch = ({navigation}: any) => {
  const isFocused = useIsFocused();
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<any>({});
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState(false);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFocused) {
      setSearch(false);
      setSearched(false);
      setFilteredData(data?.results);
    }
  }, [isFocused]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        let response = await API.fetchMovies();
        setData(response);
        setFilteredData(response?.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };
    fetchMovies();
  }, []);

  const onGenre = async (id: number) => {
    try {
      setLoading(true);
      let response = await API.fetchByGenre(id);
      setFilteredData(response?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (value: any) => {
    setSearchText(value);
    if (value?.trim()) {
      setSearched(true);
      const filtered = data?.results?.filter((el: any) =>
        el?.title.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredData(filtered);
    } else {
      setSearched(false);
      setFilteredData(data?.results);
    }
  };

  const renderShow = ({item, index}: any) => {
    return (
      <Show
        onPress={() => navigation.navigate('Details', {show_id: item?.id})}
        item={item}
      />
    );
  };

  const renderCategory = ({item, index}: any) => {
    return (
      <Category
        onPress={(id: number) => {
          onGenre(id);
          setSearched(true);
        }}
        item={item}
      />
    );
  };

  const renderSearched = ({item, index}: any) => {
    return (
      <SearchedShow
        onPress={() => navigation.navigate('Details', {show_id: item?.id})}
        item={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        showSearch
        search={search}
        title={'Watch'}
        onSearch={() => setSearch(true)}
        onReset={() => {
          setSearched(false);
          setSearch(false);
          setFilteredData(data?.results);
        }}
        setSearchText={handleSearchChange}
      />
      {!loading ? (
        <View style={styles.mainContainer}>
          {!search && (
            <FlatList
              data={filteredData}
              renderItem={renderShow}
              contentContainerStyle={styles.content}
              keyExtractor={(item: any) => item?.id}
              showsVerticalScrollIndicator={false}
            />
          )}

          {search && searched && (
            <>
              <View style={styles.titleContainer}>
                <Text style={styles.result}>
                  {filteredData?.length > 0 ? `Top Results` : `No Result Found`}
                </Text>
              </View>
              <FlatList
                data={filteredData}
                renderItem={renderSearched}
                contentContainerStyle={{
                  ...styles.content,
                  paddingBottom: mvs(180),
                }}
                keyExtractor={(item: any) => item?.id}
                showsVerticalScrollIndicator={false}
              />
            </>
          )}

          {search && !searched && (
            <FlatList
              data={genres}
              renderItem={renderCategory}
              numColumns={2}
              columnWrapperStyle={styles.columnWrapper}
              contentContainerStyle={styles.content}
              keyExtractor={(item: any) => item?.id}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default Watch;
