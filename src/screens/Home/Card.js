import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import React from 'react';
import {Cappuccino} from '../../assets/data/cardDetails';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';

const Item = ({item}) => {
  const navigation = useNavigation();

  const props = {
    ...item,
  };

  const handelGoToCart = () => {
    navigation.navigate('product', {...props});
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.coffeepic}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={styles.coffeeimage}
        />
        <View style={styles.badge}>
          <Image
            source={require('../../assets/photos/star.png')}
            style={styles.star}
          />
          <Text style={styles.ratingtext}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.coffeedetails}>
          <Text style={styles.coffeename}>{item.title}</Text>
          <Text style={styles.brif}>{item.desc}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <Pressable style={styles.addcart} onPress={handelGoToCart}>
          <View style={styles.addcartimage}>
            <Image source={require('../../assets/photos/plus.png')} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
const Card = () => {
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <View style={{paddingVertical: 1}}>
      <FlatList
        data={Cappuccino}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: 146,
    borderRadius: 15,
    marginRight: 12,
    marginLeft: 2,
    paddingVertical: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
    backgroundColor: 'white',
    marginVertical: 7,
  },
  coffeepic: {},
  coffeeimage: {
    width: 129,
    height: 99,
    borderRadius: 15,
    marginHorizontal: 7,
  },
  details: {
    height: 'auto',
    marginHorizontal: 7,
    flexDirection: 'row',
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#846046',
    width: 33,
    height: 16,
    borderRadius: 16,
    marginLeft: 96,
    marginRight: 14,
    marginTop: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  coffeedetails: {
    width: '75%',
  },
  addcart: {
    width: '25%',
  },
  coffeename: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  brif: {
    fontFamily: 'Lato-Regular',
    fontSize: 6,
    lineHeight: 12,
  },
  price: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    lineHeight: 16,
  },
  addcartimage: {
    backgroundColor: '#846046',
    marginBottom: 0,
    marginTop: 'auto',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingtext: {
    fontFamily: 'Lato-Light',
    fontSize: 8,
    lineHeight: 12,
    color: 'white',
  },
  star: {
    marginLeft: 3.5,
    marginRight: 3.5,
  },
});
export default Card;
