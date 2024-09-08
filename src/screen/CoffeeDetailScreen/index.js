import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../component/Header';
import IMAGE from '../../theme/Image';
import FavouriteData from '../../mockData/FavouriteData';
import HomeData from '../../mockData/HomeData';
import ButtonComponent from '../../component/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItems,
  removeItems,
  incrementItems,
} from '../../store/CounterReducer';
import {addFavourite} from '../../store/FavouriteReducers';
import store from '../../store/Store';

const CoffeeDetailScreen = ({route, navigation, item}) => {
  const {coffeeDetail: initialCoffeeDetail} = route.params;
  const {cartAddingData} = useSelector(state => state.counter);
  const {favouriteItems} = useSelector(state => state.Favourite);
  const dispatch = useDispatch();

  const [isPressed, setIsPressed] = useState(false);
  const [isPressColor, setPressColor] = useState(false);
  const [coffeeDetail, setCoffeeDetail] = useState(initialCoffeeDetail);

  useEffect(() => {
    const itemInCart = cartAddingData.find(
      item => item.id === initialCoffeeDetail.id,
    );
    if (itemInCart && itemInCart.quantity > 0) {
      setIsPressed(true);
      setCoffeeDetail(coffeeDetail => ({
        ...coffeeDetail,
        quantity: itemInCart.quantity,
      }));
    }
  }, [cartAddingData, initialCoffeeDetail.id]);

  useEffect(() => {
    const itemFavorite = favouriteItems.find(
      item => item.id === initialCoffeeDetail.id,
    );
    setPressColor(itemFavorite);
  }, [favouriteItems, initialCoffeeDetail.id]);
  const handlePressIn = () => {
    setIsPressed(true);
    dispatch(addItems(coffeeDetail));
    showToast();
  };

  const incrementQuantity = (productId, costPerItem) => {
    setCoffeeDetail(coffeeDetail =>
      coffeeDetail.id === productId
        ? {
            ...coffeeDetail,
            quantity: coffeeDetail.quantity + 1,
            cost: coffeeDetail.cost + costPerItem,
          }
        : coffeeDetail,
    ),
      // );
      dispatch(incrementItems(productId));
  };
  const decrementQuantity = (productId, costPerItem) => {
    if (coffeeDetail.quantity > 1) {
      setCoffeeDetail(coffeeDetail =>
        coffeeDetail.id === productId
          ? {
              ...coffeeDetail,
              quantity: coffeeDetail.quantity - 1,
              cost:
                coffeeDetail.quantity < 1
                  ? coffeeDetail.cost - costPerItem
                  : coffeeDetail.cost,
            }
          : coffeeDetail,
      );

      dispatch(removeItems(productId));
    } else {
      setIsPressed(false);
      dispatch(removeItems(productId));
    }
  };

  const showToast = () => {
    console.log('Item Added');
    ToastAndroid.show(
      'Cart Item Added',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastFavMsg = () => {
    console.log('Item Added');
    ToastAndroid.show(
      'Favourite Item Added',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const handleAddData = coffeeDetail => {
    dispatch(addItems(coffeeDetail));
    showToast();
  };
  const handleAddFavorite = coffeeDetail => {
    dispatch(addFavourite(coffeeDetail));
    setPressColor(!isPressColor);
    showToastFavMsg();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.secondContainer}>
        <Header
          heading="Detail"
          imageSource={IMAGE.leftArrow}
          onPress={() => navigation.navigate('Home')}
        />

        <View style={styles.dataFullContainer}>
          <ImageBackground style={styles.bgImg} source={coffeeDetail.bgImg}>
            <TouchableOpacity
              onPress={() => handleAddFavorite(coffeeDetail)}
              style={styles.heartImgContainer}>
              <Image
                style={isPressColor ? styles.heartImgColor : styles.heartImg}
                source={coffeeDetail.heart}
              />
            </TouchableOpacity>
            <View style={styles.textOnImgContainer}>
              <View style={styles.logoTextImgContainer}>
                <View>
                  <Text style={styles.nameText}>{coffeeDetail.name}</Text>
                  <Text style={styles.varietyText}>{coffeeDetail.variety}</Text>
                </View>
                <View style={styles.logoImgContainer}>
                  <View style={styles.coffeeLogoContainer}>
                    <Image
                      style={styles.coffeeLogoImg}
                      source={coffeeDetail.coffeeFavouriteLogo}
                    />
                    <Text style={styles.coffeeText}>
                      {coffeeDetail.coffeeLogoText}
                    </Text>
                  </View>
                  <View style={styles.coffeeLogoContainer}>
                    <Image
                      style={styles.coffeeLogoImg}
                      source={coffeeDetail.milkDrop}
                    />
                    <Text style={styles.coffeeText}>
                      {coffeeDetail.milkText}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.ratingQualityContainer}>
                <View style={styles.ratingContainer}>
                  <Image style={styles.imgStar} source={coffeeDetail.imgStar} />
                  <Text style={styles.ratingText}>
                    {coffeeDetail.ratingText}
                  </Text>
                  <Text style={styles.ratingCode}>
                    {coffeeDetail.ratingCode}
                  </Text>
                </View>
                <View style={styles.qualityContainer}>
                  <Text style={styles.qualityText}>{coffeeDetail.quality}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.desContainer}>
            <Text style={styles.desHeadText}>{coffeeDetail.des}</Text>
            <Text style={styles.desParaText}>{coffeeDetail.desPara}</Text>
            <Text style={styles.desHeadText}>Size</Text>
            <View style={styles.sizeWholeContainer}>
              <View style={styles.sizeContainer}>
                <Text style={styles.sizeQuantity}>
                  {coffeeDetail.quantityOne}
                </Text>
              </View>
              <View style={styles.sizeContainer}>
                <Text style={styles.sizeQuantity}>
                  {coffeeDetail.quantityTwo}
                </Text>
              </View>
              <View style={styles.sizeContainer}>
                <Text style={styles.sizeQuantity}>
                  {coffeeDetail.quantityThree}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.btnCostContainer}>
          <View style={styles.costContainer}>
            <Text style={styles.textPrice}>Price</Text>
            <Text style={styles.dataCost}>
              {(coffeeDetail.cost * coffeeDetail.quantity).toFixed(2)}
            </Text>
          </View>
          {isPressed ? (
            <View style={styles.sizeButtonContainer}>
              <View>
                <TouchableOpacity
                  style={styles.touchableButton}
                  onPress={() =>
                    decrementQuantity(coffeeDetail.id, coffeeDetail.id)
                  }>
                  <Text style={styles.dataButton}>
                    {coffeeDetail.buttonTwo}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.quantityTextContainer}>
                  <Text style={styles.numberText}>{coffeeDetail.quantity}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.touchableButton}
                  onPress={() =>
                    incrementQuantity(coffeeDetail.id, coffeeDetail.id)
                  }>
                  <Text style={styles.dataButton}>
                    {coffeeDetail.buttonOne}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <ButtonComponent
                text="ADD TO CART"
                customStyles={styles.addCartBtn}
                onPress={() => handleAddData(coffeeDetail)}
                // onPressIn={handlePressIn}
                // onPressOut={handlePressOut}
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default CoffeeDetailScreen;

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
  dataCost: {
    color: '#d17842',
    fontSize: 20,
  },
  btnCostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCartBtn: {
    width: 240,
    position: 'absolute',
    right: 0,
  },
  touchableButton: {
    backgroundColor: '#d17842',
    width: 70,
    height: 28,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  dataButton: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  sizeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  quantityTextContainer: {
    backgroundColor: '#0C0F14',
    width: 70,
    height: 30,
    color: 'white',
    borderRadius: 7,
    borderColor: '#D17842',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 5,
  },

  numberText: {
    color: 'white',
    fontSize: 16,
    marginTop: 4,
    alignSelf: 'center',
    justifyContent: 'center',
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
    tintColor: 'white',
  },
  heartImgColor: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 7,
    tintColor: 'red',
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
    // alignSelf: 'center',
    marginTop: 7,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    // marginTop: 10,
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
    height: 180,
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
  textPrice: {
    color: 'grey',
    fontSize: 12,
    alignSelf: 'center',
  },
  costContainer: {
    justifyContent: 'center',
    marginTop: 10,
    margin: 15,
  },
  sizeContainer: {
    backgroundColor: '#0C0F14',
    width: 90,
    height: 35,
    borderRadius: 10,
    marginRight: 20,
    marginTop: 8,
    // marginBottom: 5,
  },
  sizeQuantity: {
    color: '#AEAEAE',
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  sizeWholeContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
});
