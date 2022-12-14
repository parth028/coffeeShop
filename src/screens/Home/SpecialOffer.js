import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const SpecialOffer = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.specialoffer}>
        <Text style={styles.specialoffertext}>Special Offer</Text>
        <Image
          style={styles.fireimg}
          source={require('../../assets/photos/Fire.png')}
        />
      </View>
      <View style={styles.offeritem}>
        <View style={styles.offerpic}>
          <Image
            source={require('../../assets/photos/Cappuccino1.jpg')}
            resizeMode="cover"
            style={styles.offerimage}
          />
        </View>
        <View style={styles.offerdetail}>
          <View style={styles.badge}>
            <Text style={styles.badgetext}>Limited</Text>
          </View>
          <Text style={styles.offertext} numberOfLines={3}>
            Buy 1 get 1 free if you buy with Gopay
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    marginBottom: 31,
  },
  specialoffertext: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginRight: 5,
  },
  specialoffer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  fireimg: {
    marginBottom: 2.5,
  },
  offeritem: {
    height: 120,
    flexDirection: 'row',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
    backgroundColor: 'white',
  },

  offerimage: {
    width: 138,
    height: 105,
    marginVertical: 7,
    marginLeft: 8,
    borderRadius: 15,
    marginRight: 13,
  },
  offerdetail: {
    width: 144,
  },
  badge: {
    width: 47,
    height: 16,
    backgroundColor: '#846046',
    borderRadius: 16,
    marginTop: 7,
    marginBottom: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgetext: {
    fontFamily: 'Lato-Black',
    fontSize: 8,
    lineHeight: 12,
    color: 'white',
  },
  offertext: {
    fontFamily: 'Lato-ExtraBold',
    fontSize: 16,
    lineHeight: 20,
    color: 'black',
  },
});

export default SpecialOffer;
