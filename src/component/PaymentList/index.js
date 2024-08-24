import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IMAGE from '../../theme/Image';
// import Payment

const PaymentList = ({text, imageSource}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageSource} style={styles.bgImg} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262B33',
    width: 350,
    height: 50,
    borderRadius: 25,
  },
  bgImg: {
    width: 25,
    height: 20,
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
