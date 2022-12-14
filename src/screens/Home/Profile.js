import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image source={require('../../assets/photos/profilepic.png')}></Image>
      <View style={styles.locView}>
        <Image
          style={styles.locicon}
          source={require('../../assets/photos/location.png')}
        />
        <Text style={styles.locText}>Bintara,Bekasi</Text>
      </View>
      <View style={styles.notView}>
        <Image
          source={require('../../assets/photos/Vector.png')}
          style={styles.notIcon}></Image>
        <Image
          source={require('../../assets/photos/dot.png')}
          style={styles.notBadge}></Image>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profile: {
    height: 60,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    marginBottom: 14,
  },
  locView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locicon: {
    height: 20,
    width: 20,
  },
  locText: {
    marginLeft: 1,
    paddingTop: 9,
    fontFamily: 'Lato-ExtraBold',
    fontSize: 12,
    lineHeight: 12,
    color: 'black',
  },
  notView: {
    width: 24,
    height: 24,

    justifyContent: 'center',
    alignItems: 'center',
  },
  notIcon: {
    height: 21.75,
    width: 19.5,
  },
  notBadge: {
    position: 'absolute',
    width: 8,
    height: 8,
    left: 13.5,
    top: 3,
  },
});
export default Profile;
