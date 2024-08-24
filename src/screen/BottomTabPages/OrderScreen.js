import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import IMAGE from '../../theme/Image';
import Header from '../../component/Header';
import ButtonComponent from '../../component/Button';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Header
          heading="Order History"
          imageSource={IMAGE.headerIcon}
          imageSourceTwo={IMAGE.headerProfile}
        />
        <ButtonComponent text="Download" />
      </View>
    </View>
  );
};

export default OrderScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  secondContainer: {
    margin: 10,
  },
});
