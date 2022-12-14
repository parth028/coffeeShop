import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.search}>
        <Text style={styles.heading}>Good morning, Dityo</Text>
        <View style={styles.searchbar}>
          <Image
            source={require('../../assets/photos/search.png')}
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search Coffee" style={styles.searchfield} />
          <Image
            source={require('../../assets/photos/Group.png')}
            style={styles.filterIcon}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  search: {
    width: '100%',
    marginBottom: 32,
  },
  heading: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginBottom: 32,
  },
  searchbar: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 99,
    borderWidth: 1,
    borderColor: '#A6A6AA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchIcon: {
    height: 19,
    width: 19,
    marginLeft: 17,
  },
  filterIcon: {
    height: 19,
    width: 19,
    marginRight: 17,
  },
  searchfield: {
    marginLeft: 7,
    marginRight: 'auto',
  },
});
export default Search;
