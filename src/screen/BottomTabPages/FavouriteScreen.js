import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import IMAGE from '../../theme/Image';
import {useSelector} from 'react-redux';

const FavouriteScreen = () => {
  const {favouriteItems} = useSelector(state => state.Favourite);

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Header
          heading="Favorites"
          imageSource={IMAGE.headerIcon}
          imageSourceTwo={IMAGE.headerProfile}
        />
        <FlatList
          data={favouriteItems}
          renderItem={({item}) => (
            <View style={styles.dataFullContainer}>
              <ImageBackground style={styles.bgImg} source={item.bgImg}>
                <TouchableOpacity style={styles.heartImgContainer}>
                  <Image style={styles.heartImg} source={item.heart} />
                </TouchableOpacity>
                <View style={styles.textOnImgContainer}>
                  <View style={styles.logoTextImgContainer}>
                    <View>
                      <Text style={styles.nameText}>{item.name}</Text>
                      <Text style={styles.varietyText}>{item.variety}</Text>
                    </View>
                    <View style={styles.logoImgContainer}>
                      <View style={styles.coffeeLogoContainer}>
                        <Image
                          style={styles.coffeeLogoImg}
                          source={item.coffeeFavouriteLogo}
                        />
                        <Text style={styles.coffeeText}>
                          {item.coffeeLogoText}
                        </Text>
                      </View>
                      <View style={styles.coffeeLogoContainer}>
                        <Image
                          style={styles.coffeeLogoImg}
                          source={item.milkDrop}
                        />
                        <Text style={styles.coffeeText}>{item.milkText}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.ratingQualityContainer}>
                    <View style={styles.ratingContainer}>
                      <Image style={styles.imgStar} source={item.imgStar} />
                      <Text style={styles.ratingText}>{item.ratingText}</Text>
                      <Text style={styles.ratingCode}>{item.ratingCode}</Text>
                    </View>
                    <View style={styles.qualityContainer}>
                      <Text style={styles.qualityText}>{item.quality}</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <View style={styles.desContainer}>
                <Text style={styles.desHeadText}>{item.des}</Text>
                <Text style={styles.desParaText}>{item.desPara}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  secondContainer: {
    margin: 10,
  },
  dataFullContainer: {
    marginBottom: 30,
  },
  bgImg: {
    width: 350,
    height: 457,
    marginLeft: 10,
    marginTop: 20,
  },
  heartImg: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },
  heartImgContainer: {
    borderRadius: 10,
    backgroundColor: '#21262E',

    width: 30,
    height: 30,
    marginTop: 20,
    position: 'absolute',
    top: 0,
    right: 10,
  },
  textOnImgContainer: {
    backgroundColor: '#00000080',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: 350,
    height: 133,
  },
  imgStar: {
    width: 20,
    height: 20,
    tintColor: '#D17842',
    marginRight: 5,
  },
  nameText: {
    fontSize: 20,
    color: 'white',
  },
  varietyText: {
    color: '#AEAEAE',
    fontSize: 12,
  },
  ratingText: {
    fontSize: 16,
    color: 'white',
  },
  ratingCode: {
    color: '#AEAEAE',
    fontSize: 10,
    marginTop: 7,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  coffeeLogoImg: {
    width: 29,
    height: 24,
    alignSelf: 'center',
    marginTop: 7,
  },
  coffeeLogoContainer: {
    backgroundColor: '#141921',
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  coffeeText: {
    color: '#AEAEAE',
    fontSize: 10,
    alignSelf: 'center',
  },
  logoImgContainer: {
    flexDirection: 'row',
  },
  logoTextImgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
  },
  qualityText: {
    color: '#AEAEAE',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  qualityContainer: {
    backgroundColor: '#141921',
    width: 118,

    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  ratingQualityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  desContainer: {
    backgroundColor: '#262B33',
    borderBottomLeftRadius: 23,
    width: 350,
    height: 120,
    borderBottomRightRadius: 23,
    marginLeft: 10,
  },
  desHeadText: {
    color: '#AEAEAE',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 15,
    fontWeight: '600',
  },
  desParaText: {
    color: '#FFFFFF',
    fontSize: 12,
    width: 301,
    marginLeft: 20,
    lineHeight: 20,
  },
});
