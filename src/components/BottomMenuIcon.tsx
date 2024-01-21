import React from 'react';
import * as Icons from '../../assets/svgs';
import colors from '../config/colors';
import { mvs } from '../config/metrices';
import { StyleSheet, View } from 'react-native';

interface BottomMenuIconProps {
  name: string;
  focused?: any;
}

// This component is used to return an icon for the bottom tab bar
const BottomMenuIcon: React.FC<BottomMenuIconProps> = ({ name, focused }) => {
  //@ts-ignore
  const TabBarIconsComponent = Icons[name + (focused ? 'Active' : '')];

  return (
    <View style={styles.container}>
      <TabBarIconsComponent
        // height={mvs(24)}
        // width={mvs(25)}
        fill={focused ? colors.primary : colors.background}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: mvs(24),
    width: mvs(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomMenuIcon;
