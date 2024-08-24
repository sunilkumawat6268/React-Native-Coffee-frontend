import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import mockData from '../../mockData';
import {FlatList} from 'react-native';

const Espresso = ({navigation}) => {
  const {HomeData} = mockData;
  const EspressoData = HomeData.filter(item => item.name === 'Espresso');
  return (
    <View style={styles.container}>
      <FlatList
        data={EspressoData}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.dataContainer}
            onPress={() =>
              navigation.navigate('CoffeeDetailScreen', {coffeeDetail: item})
            }>
            <ImageBackground
              style={styles.dataCoffeeImg}
              imageStyle={styles.imageStyle}
              source={item.backgroundImage}>
              <View style={styles.rateStarContainer}>
                <Image style={styles.dataStarImg} source={item.imageStar} />
                <Text style={styles.dataRatingText}>{item.ratingText}</Text>
              </View>
            </ImageBackground>

            <Text style={styles.dataTextName}>{item.name}</Text>
            <Text style={styles.dataItemVariety}>{item.variety}</Text>
            <View style={styles.costButtonContainer}>
              <Text style={styles.dataCost}>{item.cost}</Text>
              <TouchableOpacity style={styles.touchableButton}>
                <Text style={styles.dataButton}>{item.button}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Espresso;

const styles = StyleSheet.create({
  headText: {
    color: 'white',
  },
  container: {
    backgroundColor: 'black',
  },
  dataTextName: {
    color: 'white',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 5,
  },
  dataItemVariety: {
    color: 'white',
    fontSize: 9,
    fontWeight: '400',
  },
  dataCoffeeImg: {
    width: 126,
    height: 126,
    borderRadius: 30,
  },
  imageStyle: {
    borderRadius: 15,
  },
  dataStarImg: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    tintColor: '#D17842',
  },
  dataRatingText: {
    color: 'white',
    marginLeft: 5,
    marginRight: 6,
    fontSize: 10,
    alignSelf: 'center',
  },
  rateStarContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#00000099',
    padding: 3,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 26,
    paddingLeft: 16,
    width: 53,
    height: 22,
  },

  dataContainer: {
    backgroundColor: '#242931',
    padding: 15,
    margin: 10,
    width: 149,
    height: 245,
    borderRadius: 23,
    overflow: 'hidden',
  },
  dataButton: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  touchableButton: {
    backgroundColor: '#d17842',
    width: 28,
    height: 28,

    marginTop: 8,
    borderRadius: 5,
  },
  dataCost: {
    color: '#d17842',
    marginTop: 12,
    fontSize: 14,
  },
  costButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coffeeHead: {
    color: 'white',
    fontSize: 19,
    marginLeft: 15,
    marginTop: 15,
  },
});
