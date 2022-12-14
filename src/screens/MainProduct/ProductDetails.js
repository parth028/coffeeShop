import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Size = [
  {
    id: '1',
    size: 'Small',
  },
  {
    id: '2',
    size: 'Medium',
  },
  {
    id: '3',
    size: 'Large',
  },
];

const Item = ({item, onPress, selectedId}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.sizebox,
          item.id === selectedId
            ? {backgroundColor: '#846046'}
            : {
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#d9d9d9',
              },
        ]}>
        <Text
          style={[
            styles.boxtext,
            item.id === selectedId
              ? {color: 'white'}
              : {
                  color: 'black',
                },
          ]}>
          {item.size}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ProductDetails = () => {
  const [selectedId, setSelectedId] = useState('1');

  const renderItem = ({item}) => {
    const handlePress = () => {
      setSelectedId(item.id);
    };
    return <Item item={item} onPress={handlePress} selectedId={selectedId} />;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainView}>
        <View style={styles.ingrediantsView}>
          <View style={styles.ingrediants}>
            <Image
              style={styles.ingrediantimg}
              source={require('../../assets/photos/coffee-bean.png')}
            />
            <Text style={styles.ingrediantstext}>Coffee</Text>
          </View>
          <View style={styles.verticalline}></View>
          <View style={styles.ingrediants}>
            <Image
              style={styles.ingrediantimg}
              source={require('../../assets/photos/chocolate-bar.png')}
            />
            <Text style={styles.ingrediantstext}>Chocolate</Text>
          </View>
          <View style={styles.verticalline}></View>
          <View>
            <Text style={styles.ingrediantstext}>Medium Roasted</Text>
          </View>
        </View>
        <View style={styles.size}>
          <Text style={styles.coffeesize}>Coffee Size</Text>
          <FlatList
            data={Size}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            extraData={selectedId}
          />
        </View>
        <View style={styles.about}>
          <Text style={styles.aboutheading}>About</Text>
          <Text style={styles.aboutsummary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum
            vivamus velit lorem amet. Tincidunt cras volutpat aliquam porttitor
            molestie. Netus neque, habitasse id vulputate proin cras. Neque, vel
            duis sit vel pellentesque tempor. A commodo arcu tortor arcu, elit.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 20,
  },
  ingrediantsView: {
    backgroundColor: '#d8d8da',
    height: 55,
    width: '100%',
    borderRadius: 27,
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  ingrediants: {
    flexDirection: 'row',
  },
  ingrediantstext: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: 'black',
    paddingTop: 3,
  },
  ingrediantimg: {
    height: 20,
    width: 20,
    marginRight: 6,
  },
  verticalline: {
    height: '45%',
    borderWidth: 1,
    borderColor: 'black',
  },
  size: {
    marginBottom: 22,
  },
  coffeesize: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginBottom: 16,
  },

  sizebox: {
    height: 37,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 17,
  },
  boxtext: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    lineHeight: 24,
  },

  aboutheading: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginBottom: 10,
  },
  aboutsummary: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: 'black',
  },
});
export default ProductDetails;
