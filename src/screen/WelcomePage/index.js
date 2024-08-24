import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import styles from './styles';

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        style={styles.bgImg}
        source={require('../../assets/Images/welcomeLogo.jpg')}>
        {/* <Image
          style={styles.welImg}
          source={require('../../assets/Images/logoCoffe.jpg')}
        /> */}
        <Text style={styles.welText}>Coffee Time !</Text>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;
