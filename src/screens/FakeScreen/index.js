import {View, Text} from 'react-native';
import React from 'react';

const FakeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
      }}>
      <Text>FakeScreen</Text>
    </View>
  );
};

export default FakeScreen;
