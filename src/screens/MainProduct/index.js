import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
import ProductDetails from './ProductDetails';

const MainProduct = ({
  route: {
    params: {...props},
  },
  navigation,
}) => {
  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#846046" />
      <View style={styles.mainView}>
        <View style={styles.imgView}>
          <Image source={props.img} resizeMode="cover" style={styles.img} />
          <Pressable onPress={handleGoback} style={styles.backbtn}>
            <Image
              style={styles.backimg}
              source={require('../../assets/photos/back.png')}
            />
          </Pressable>
          <View style={styles.details}>
            <View style={styles.productdetail}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.desc}>{props.desc}</Text>
            </View>
            <View style={styles.ratingcontainer}>
              <Image
                source={require('../../assets/photos/star.png')}
                style={styles.ratingicon}
              />
              <Text style={styles.rating}>{props.rating}</Text>
            </View>
          </View>
          <View style={styles.transparant}></View>
        </View>
        <View style={styles.detailsView}>
          <ProductDetails />
          <View style={styles.buttonView}>
            <Pressable style={styles.btn}>
              <Text style={styles.carttext}>Add to Cart</Text>
              <View style={styles.verticalline}></View>
              <Text style={styles.pricetext}>{props.price}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  imgView: {
    height: '45%',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  backbtn: {
    width: 36,
    height: 36,
    position: 'absolute',
    backgroundColor: 'white',
    top: 20,
    left: 20,
    borderRadius: 18,
    alignItems: 'center',
  },
  backimg: {
    top: 10,
    left: -1,
  },

  details: {
    width: '100%',
    height: 71,
    position: 'absolute',
    bottom: '11%',
    backgroundColor: '#00000099',
    // opacity: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Lato-bold',
    fontSize: 28,
    lineHeight: 32,
    color: 'white',
    marginBottom: 6,
  },
  desc: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    lineHeight: 12,
    color: 'white',
  },
  ratingcontainer: {
    width: 60,
    height: 31,
    backgroundColor: '#846046',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  ratingicon: {
    width: 15,
    height: 15,
  },
  rating: {
    fontFamily: 'Lato-ExtraBold',
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
    marginLeft: 4,
  },
  transparant: {
    borderColor: 'white',
    width: '100%',
    height: '11%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.6,
  },
  detailsView: {
    width: '100%',
    borderRadius: 40,
    position: 'absolute',
    top: '40%',
    bottom: 0,
    backgroundColor: '#F8F7FA',
    paddingBottom: 140,
    paddingTop: 20,
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 140,
    // borderTopWidth: 1,
    backgroundColor: '#F8F7FA',
    paddingHorizontal: 20,
  },
  btn: {
    width: '100%',
    backgroundColor: '#846046',
    borderRadius: 34,
    marginBottom: 43,
    marginTop: 25,
    height: 73,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  verticalline: {
    height: '50%',
    borderWidth: 1,
    borderColor: 'white',
  },
  carttext: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
    marginHorizontal: 50,
  },
  pricetext: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
    marginRight: 52,
    marginLeft: 30,
  },
});
export default MainProduct;
