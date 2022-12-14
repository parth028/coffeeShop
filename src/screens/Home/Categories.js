import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Division} from '../../assets/data/division';
import Card from './Card';

const Item = ({item, onPress, selectedId}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.divisionContainer,
          item.id === selectedId
            ? {backgroundColor: '#846046'}
            : {
                backgroundColor: 'white',
              },
        ]}>
        <Image source={item.icon} style={styles.icon} />
        <Text
          numberOfLines={3}
          style={[
            styles.title,
            item.id === selectedId
              ? {color: 'white'}
              : {
                  color: 'black',
                },
          ]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const [selectedId, setSelectedId] = useState('1');

  const renderItem = ({item}) => {
    const handlePress = () => {
      setSelectedId(item.id);
      console.log('pessid', item.id);
    };
    return <Item item={item} onPress={handlePress} selectedId={selectedId} />;
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.categories}>
      <Text style={styles.maintext}>Categories</Text>
      <View>
        <FlatList
          data={Division}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          extraData={selectedId}
        />
      </View>
      <Card />
    </View>
  );
};
const styles = StyleSheet.create({
  categories: {
    width: '100%',
    marginBottom: 28,
  },
  maintext: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginBottom: 24,
  },
  divisionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 33,
    alignItems: 'center',
    marginRight: 13,
  },
  title: {
    fontFamily: 'Lato-ExtraBold',
    fontSize: 12,
    lineHeight: 16,
  },
  icon: {
    width: 15.76,
    height: 16,
    marginRight: 6,
  },
});
export default Categories;
