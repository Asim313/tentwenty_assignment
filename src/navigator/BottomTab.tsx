import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Fill,
  Group,
  Location,
  TicketExpired,
  UserProfile,
} from '../../assets/svgs';
import {mvs} from '../config/metrices';
import BottomMenu from '../components/BottomMenu';
import BottomMenuIcon from '../components/BottomMenuIcon';
import Watch from '../screens/TabScreens/Watch';
import Dashboard from '../screens/TabScreens/Dashboard';
import MediaLibrary from '../screens/TabScreens/MediaLibrary';
import More from '../screens/TabScreens/More';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => (
        //@ts-ignore
        <BottomMenu {...props} />
      )}
      initialRouteName='Watch'
      >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          tabBarIcon: focused => (
            <BottomMenuIcon name="Dashboard" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={Watch}
        options={{
          title: 'Watch',
          tabBarIcon: focused => (
            <BottomMenuIcon name="Watch" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Media Library"
        component={MediaLibrary}
        options={{
          title: 'Media Library',
          tabBarIcon: focused => (
            <BottomMenuIcon name="Media" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          title: 'More',
          tabBarIcon: focused => (
            <BottomMenuIcon name="More" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
