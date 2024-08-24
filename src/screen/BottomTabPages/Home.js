import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import TopNavigation from '../../navigation/TopNavigation';
import InputText from '../../component/Input';
import mockData from '../../mockData';
import BeansData from '../../mockData/BeansData';
import Header from '../../component/Header';
import IMAGE from '../../theme/Image';

const Home = ({navigation}) => {
  const {HomeData} = mockData;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.secondContainer}>
        <Header
          imageSource={IMAGE.headerIcon}
          onPressEvent={() => navigation.navigate('ProfilePage')}
          imageSourceTwo={IMAGE.headerProfile}
        />
        <Text style={styles.findText}>Find the best{'\n'}coffee for you</Text>
        <InputText
          style={styles.imgInput}
          imageSource={require('../../assets/Images/search.png')}
          placeholder="Find your Coffee"
        />
        <TopNavigation />

        <Text style={styles.coffeeHead}>Coffee Beans</Text>
        <FlatList
          data={BeansData}
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
                source={item.backgroundImage}></ImageBackground>

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
    </ScrollView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  findText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    width: 250,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  secondContainer: {
    margin: 10,
  },
  imgInput: {
    marginRight: 10,
    tintColor: 'black',
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
