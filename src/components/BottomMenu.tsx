import React, {FC} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../config/colors';
import {mvs} from '../config/metrices';

interface BottomMenuProps {
  state: {index: number; routes: {key: string; name: string}[]};
  navigation: {
    emit: (event: {
      type: string;
      target: string;
      canPreventDefault: boolean;
    }) => any;
    navigate: (routeName: string) => void;
  };
  descriptors: {
    [key: string]: {
      options: {
        tabBarIcon?: (
          isFocused: boolean,
          color: string,
          size: number,
        ) => React.ReactNode;
        tabBarAccessibilityLabel?: string;
      };
    };
  };
}

const BottomMenu: FC<BottomMenuProps> = props => {
  const {state, navigation, descriptors} = props;
  const {index, routes} = state;

  return (
    <View style={[styles.container]}>
      {routes.map((route, idx) => {
        const {options} = descriptors[route.key];
        const isFocused = index === idx;
        const icon =
          options.tabBarIcon !== undefined
            ? options.tabBarIcon(isFocused, 'white', 10)
            : null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={1}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            key={route.key}
            onPress={onPress}
            style={styles.tab}>
            <View style={styles.customIcon}>
              {icon}
              <Text
                style={{
                  ...styles.title,
                  fontFamily: isFocused ? 'Poppins-Bold' : 'Poppins-Regular',
                  color: isFocused ? Colors.white : Colors.gray,
                }}>
                {route.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS == 'ios' ? mvs(75) : mvs(75),
    borderTopRightRadius: mvs(27),
    borderTopLeftRadius: mvs(27),
    paddingHorizontal: mvs(32),
    backgroundColor: Colors.bottom,
    overflow: 'hidden',
    width: '100%',
  },
  tab: {
    backgroundColor: `transparent`,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  customIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: mvs(10),
    color: '#fff',
    marginTop: mvs(5),
    fontFamily: 'Poppins-Regular',
  },
});

export default BottomMenu;
