import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Dimensions,
  StatusBar,
} from 'react-native';
import React from 'react';
import Profile from './Profile';
import Search from './Search';
import Categories from './Categories';
import SpecialOffer from './SpecialOffer';

const ScreenHeight = Dimensions.get('window').height;
// const {height} = Dimensions();
const Home = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Profile />
          <Search />
          <Categories />
          <SpecialOffer />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 36,
    alignItems: 'center',
    backgroundColor: 'white',
    // borderWidth: 1,
    height: '100%',
    minHeight: ScreenHeight,
  },
});
export default Home;
