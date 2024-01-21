//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../config/colors';
import Header from '../../../components/Header';
import {mvs} from '../../../config/metrices';
import {styles} from './styles';

// create a component
const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header title={'Dashboard'} />
      <View style={styles.mainContainer}>
        <Text style={styles.status}>{'Comming Soon...'}</Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default Dashboard;
