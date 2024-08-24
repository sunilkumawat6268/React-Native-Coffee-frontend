import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/Header';
import CartData from '../../mockData/CartData';
import IMAGE from '../../theme/Image';
import {useSelector, useDispatch} from 'react-redux';
//
// import removeItems from '../../store/CounterReducer';
import {
  removeItems,
  clearCart,
  incrementItems,
  quantity,
} from '../../store/CounterReducer';
import store from '../../store/Store';
// import HomeData from '../../mockData/HomeData';

const Cart = () => {
  const {cartAddingData} = useSelector(state => state.counter);
  console.log('Data:', cartAddingData);
  const dispatch = useDispatch();

  const [count, setCount] = useState(cartAddingData);

  const incrementQuantity = (productId, costPerItem) => {
    setCount(prevCount =>
      prevCount.map(item =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              cost: item.cost + costPerItem,
            }
          : item,
      ),
    );
    dispatch(incrementItems(productId));
  };
  const decrementQuantity = (productId, costPerItem) => {
    setCount(prevCount =>
      prevCount.map(item =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1,
              cost: item.quantity > 1 ? item.cost - costPerItem : item.cost,
            }
          : item,
      ),
    );
    dispatch(removeItems(productId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Header
          heading="Cart"
          imageSource={IMAGE.headerIcon}
          imageSourceTwo={IMAGE.headerProfile}
        />
        <FlatList
          data={cartAddingData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.cartFirstContainer}>
              <View style={styles.cartImgTextContainer}>
                <ImageBackground
                  style={styles.dataCoffeeImg}
                  imageStyle={styles.imageStyle}
                  source={item.backgroundImage}
                />
                <View style={styles.cartTextSideContainer}>
                  <Text style={styles.dataTextName}>{item.name}</Text>
                  <Text style={styles.dataItemVariety}>{item.variety}</Text>
                  <View>
                    <Text style={styles.dataCost}>
                      {(item.cost * item.quantity).toFixed(2)}
                    </Text>
                  </View>
                  <View style={styles.sizeButtonContainer}>
                    <View>
                      <TouchableOpacity
                        style={styles.touchableButton}
                        onPress={() =>
                          decrementQuantity(item.id, item.costPerItem)
                        }>
                        <Text style={styles.dataButton}>{item.buttonTwo}</Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <View style={styles.quantityTextContainer}>
                        <Text style={styles.numberText}>{item.quantity}</Text>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.touchableButton}
                        onPress={() =>
                          incrementQuantity(item.id, item.costPerItem)
                        }>
                        <Text style={styles.dataButton}>{item.buttonOne}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  secondContainer: {
    margin: 10,
  },
  textCartHeading: {
    color: 'white',
  },
  cartFirstContainer: {
    backgroundColor: '#262B33',
    padding: 15,
    margin: 10,
    marginBottom: 30,
    marginTop: 20,
    width: 340,
    height: 154,
    borderRadius: 23,
  },
  dataCoffeeImg: {
    width: 126,
    height: 126,
    borderRadius: 30,
  },
  imageStyle: {
    borderRadius: 15,
  },
  dataTextName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  dataItemVariety: {
    color: '#AEAEAE',
    fontSize: 10,
    fontWeight: '400',
  },
  cartImgTextContainer: {
    flexDirection: 'row',
  },
  cartTextSideContainer: {
    marginLeft: 15,
  },
  cartTextMediumImg: {
    width: 118,
    height: 40,
    marginTop: 25,
  },
  sizeImg: {
    width: 72,
    height: 35,
    marginBottom: 10,
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
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  dataCost: {
    color: '#d17842',
    marginTop: 12,
    fontSize: 20,
    marginBottom: 12,
  },

  sizeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  quantityTextContainer: {
    backgroundColor: '#0C0F14',
    width: 50,
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

  sizeContainer: {
    backgroundColor: '#0C0F14',
    width: 72,
    height: 35,
    borderRadius: 10,
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
});
