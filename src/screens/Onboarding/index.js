import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Animated,
} from 'react-native';
import React from 'react';

import Slider from './Slider';

const Onboarding = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('BottomTab');
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/photos/coffeeHome.jpg')}
        resizeMode="cover"
        imageStyle={{opacity: 0.45}}
        style={styles.bgimage}>
        <View style={styles.content}>
          <Slider />
          <Pressable style={styles.btn} onPress={handlePress}>
            <Text style={styles.btnText}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  bgimage: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  btn: {
    backgroundColor: '#846046',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
    paddingHorizontal: 91,
    paddingVertical: 20,
  },
  btnText: {
    fontFamily: 'Lato-Bold',
    fontWeight: '200',
    fontSize: 20,
    color: 'white',
  },
});
export default Onboarding;
