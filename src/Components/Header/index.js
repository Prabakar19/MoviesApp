import {View, Text} from 'react-native';
import React, {PureComponent} from 'react';

export const Header = ({title}) => {
  console.log(title);
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: 'orange',
      }}>
      <Text style={{fontSize: 25, textAlign: 'center', color: 'black'}}>
        {title}
      </Text>
    </View>
  );
};
