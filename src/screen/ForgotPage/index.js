import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import InputText from '../../component/Input';
import ButtonComponent from '../../component/Button';
import Toast from 'react-native-toast-message';
import styles from './styles';

const ForgotPage = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleOnSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Alert.alert('Please enter a valid email address');
      Toast.show({
        type: 'error',
        text1: 'Email Required',
        text2: 'Please enter a valid email address',
      });
    } else {
      // Alert.alert('Success', 'Otp Sent on Email');
      Toast.show({
        type: 'success',
        text1: 'Check Your Email',
        text2: 'Otp Sent On Email',
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Image
          style={styles.imgLogo}
          source={require('../../assets/Images/coffeeLogo.png')}
        />
        <Text style={styles.forgotText}>Forgot Password?</Text>
        <Text style={styles.worryText}>
          Don't worry! It happens, please enter the address associated with your
          account
        </Text>
        <InputText
          style={styles.inputText}
          placeholder="Email ID"
          onChangeText={setEmail}
        />
        <ButtonComponent onPress={handleOnSubmit} text="Submit" />

        <Text style={styles.alreadyText}>
          Already have an account?
          <Text
            style={{color: '#d17842'}}
            onPress={() => navigation.navigate('SignUp')}>
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default ForgotPage;
