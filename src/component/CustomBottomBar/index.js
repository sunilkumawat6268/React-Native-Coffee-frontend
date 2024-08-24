import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import IMAGE from '../../theme/Image';
import {useDispatch, useSelector} from 'react-redux';

const CustomBottomBar = ({navigation}) => {
  const [activeTabIcon, setActiveTabIcon] = useState('1');
  const cartItemCount = useSelector(state => state.counter.cartAddingData);
  const favoriteItemCount = useSelector(
    state => state.Favourite.favouriteItems,
  );
  const dispatch = useDispatch();

  const tabBarData = [
    {
      id: '1',
      image: IMAGE.homeIcon,
      name: 'Home',
      routeName: 'Home',
    },
    {
      id: '2',
      image: IMAGE.cartIcon,
      name: 'Cart',
      routeName: 'Cart',
    },
    {
      id: '3',
      image: IMAGE.favouriteIcon,
      name: 'Favourite',
      routeName: 'Favourite',
    },
    {
      id: '4',
      image: IMAGE.orderIcon,
      name: 'OrderScreen',
      routeName: 'Order',
    },
  ];

  const handlePressIcon = tabId => {
    const selectedTab = tabBarData.find(tab => tab.id === tabId);

    if (selectedTab) {
      setActiveTabIcon(tabId);
      navigation.navigate(selectedTab.routeName);
    }
  };

  // useEffect(() => {
  //   if (cartItemCount.length > 0) {
  //     setActiveTabIcon('2');
  //   }
  // }, [cartItemCount]);
  // useEffect(() => {
  //   if (favoriteItemCount.length > 0) {
  //     setActiveTabIcon('3');
  //   }
  // }, [favoriteItemCount]);
  return (
    <View>
      <View style={styles.dataContainer}>
        <FlatList
          data={tabBarData}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({item, routeName}) => {
            const isFocused = item.id === activeTabIcon;
            const isCartItem = item.id === '2';
            const isFavoriteItem = item.id === '3';

            return (
              <TouchableOpacity
                onPress={() => handlePressIcon(item.id)}
                style={styles.iconContainer}>
                <Image
                  style={isFocused ? styles.dataImg : styles.dataImgColor}
                  source={item.image}
                />
                {isCartItem && cartItemCount.length > 0 && (
                  <Text style={styles.cartText}>{cartItemCount.length}</Text>
                )}
                {isFavoriteItem && favoriteItemCount.length > 0 && (
                  <Text style={styles.cartText}>
                    {favoriteItemCount.length}
                  </Text>
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CustomBottomBar;

const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: 'row',

    backgroundColor: 'rgba(0, 0, 0, 1)',

    height: 85,
  },
  dataImg: {
    width: 34,
    height: 34,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 27,
  },
  iconContainer: {},
  dataImgColor: {
    width: 34,
    height: 34,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 27,
    tintColor: 'grey',
  },
  cartText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    position: 'absolute',
    top: 24,
    right: 25,
    alignSelf: 'center',
    backgroundColor: '#d17842',
    borderRadius: 40,
    width: 20,
    height: 20,
    alignItems: 'center',
    paddingLeft: 6,
  },
});
