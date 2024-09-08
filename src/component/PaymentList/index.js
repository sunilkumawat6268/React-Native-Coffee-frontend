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
    backgroundColor: '#14171d',
    width: 350,
    height: 50,
    borderRadius: 25,
    marginVertical: 10,
    marginRight: 20,
    borderColor: '#242930',
    flexDirection: 'row',

    borderWidth: 2,
  },
  bgImg: {
    width: 25,
    height: 29,
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 15,
    alignSelf: 'center',
  },
});
