import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import ButtonComponent from '../../component/Button';
import IMAGE from '../../theme/Image';
import PaymentList from '../../component/PaymentList';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Header heading="Payment" imageSource={IMAGE.leftArrow} />
      <View style={styles.secondContainer}>
        <Text style={styles.cardText}>Credit Card</Text>
        <View style={styles.cardContainer}>
          <View style={styles.textImgContainer}>
            <ImageBackground source={IMAGE.chipImg} style={styles.chipBgImg} />
            <Text style={styles.cardVisaText}>VISA</Text>
          </View>
          <Text style={styles.cardNumber}>3897 8923 6745 4638</Text>
          <View style={styles.textCardContainer}>
            <View>
              <Text style={styles.cardHolderText}>Card Holder Name</Text>
              <Text style={styles.cardNameText}>Robert Evans</Text>
            </View>
            <View>
              <Text style={styles.cardHolderText}>Expiry Date</Text>
              <Text style={styles.cardNameText}>02/30</Text>
            </View>
          </View>
        </View>
        <PaymentList imageSource={IMAGE.walletPaymentImg} text="Wallet" />
        <PaymentList imageSource={IMAGE.googlePayImg} text="Google Pay" />
        <PaymentList imageSource={IMAGE.applePayImg} text="Apple Pay" />
        <PaymentList imageSource={IMAGE.amazonPayImg} text="Amazon Pay" />

        <ButtonComponent
          price="Price"
          text="Pay from Credit Card"
          cost="$ 4.20"
          customStyles={styles.addCartBtn}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  secondContainer: {
    margin: 10,
    marginLeft: 25,
  },
  addCartBtn: {
    width: 240,
    position: 'absolute',
    right: 0,
    // bottom: 20,
    top: 100,
  },
  cardText: {
    color: 'white',
    marginTop: 25,
    marginBottom: 10,
  },
  chipBgImg: {
    width: 31,
    height: 24,
    margin: 10,
  },
  cardContainer: {
    width: 350,
    height: 186,
    backgroundColor: '#1e222a',
    marginBottom: 10,
    borderRadius: 15,
  },
  cardVisaText: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
  textImgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardNumber: {
    fontSize: 14,
    color: 'white',
    // width: 600,
    // height: 20,
    // alignSelf: 'center',
    letterSpacing: 7,
    marginLeft: 10,
    fontWeight: '600',
    marginTop: 10,
  },
  cardHolderText: {
    color: '#AEAEAE',
    fontSize: 10,
  },
  textCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
    // position: 'absolute',

    // // top: 0,
    // bottom: 0,
  },
  cardNameText: {
    color: 'white',
    fontSize: 16,
  },
});
