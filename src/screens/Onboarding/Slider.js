import React, {useState, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Animated,
} from 'react-native';

const Item = ({item, width}) => {
  return (
    <View style={[styles.item, {width}]}>
      <Text style={styles.title} numberOfLines={3}>
        {item.title}
      </Text>
      <Text style={styles.subtitles} numberOfLines={2}>
        {item.subtitles}
      </Text>
    </View>
  );
};

export const contents = [
  {
    id: 1,
    title: 'Good coffee, Good friends, let it blends',
    subtitles: 'The best grain,the finest roast,the most powerful flavour',
  },
  {
    id: 2,
    title: 'Good coffee, Good friends, let it blends',
    subtitles: 'The best grain,the finest roast,the most powerful flavour',
  },
  {
    id: 3,
    title: 'Good coffee, Good friends, let it blends',
    subtitles: 'The best grain,the finest roast,the most powerful flavour',
  },
];

const Slider = () => {
  const ScrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const {width} = useWindowDimensions();

  const renderItem = ({item}) => {
    return <Item item={item} width={width} />;
  };

  const viewableItemChanged = useRef(({viewableItems}) => {
    return viewableItems[0].index;
  }).current;

  return (
    <View style={styles.mainView}>
      <View style={[styles.textView, {width: width}]}>
        <FlatList
          data={contents}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: ScrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemChanged}
          ref={slideRef}
        />
      </View>
      <View style={[styles.pagination, {width: width}]}>
        {contents.map((id, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = ScrollX.interpolate({
            inputRange,
            outputRange: [6, 27, 6],
            extrapolate: 'clamp',
          });

          const borderRadius = ScrollX.interpolate({
            inputRange,
            outputRange: [3, 0, 3],
            extrapolate: 'clamp',
          });
          const backgroundColor = ScrollX.interpolate({
            inputRange,
            outputRange: ['white', '#846046', 'white'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={[
                styles.dot,
                {width: dotWidth},
                {borderRadius: borderRadius},
                {backgroundColor: backgroundColor},
              ]}
              key={i}></Animated.View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginBottom: 0,
    marginTop: 'auto',
  },
  item: {
    flex: 1,
    paddingHorizontal: 100,
    justifyContent: 'flex-end',
  },
  textView: {
    marginBottom: 14,
    marginTop: 'auto',
    flex: 1,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
    marginBottom: 16,
    color: 'white',
  },
  subtitles: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'center',
    color: 'white',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 36,
    paddingTop: 'auto',
  },
  dot: {
    height: 6,
    borderRadius: 5,
    backgroundColor: 'black',
    marginHorizontal: 7,
  },
});

export default Slider;
