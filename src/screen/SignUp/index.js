import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import InputText from '../../component/Input';
import ButtonComponent from '../../component/Button';
import Toast from 'react-native-toast-message';
import styles from './styles';
import {addLogin} from '../../store/LoginReducer';
import {useDispatch, useSelector} from 'react-redux';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState('');
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Email Required',
        text2: 'Please enter a valid email',
      });
    } else if (password.length < 8) {
      Toast.show({
        type: 'error',
        text1: 'Password Required',
        text2: 'Please enter a password',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Login Successfully',
        text2: 'Welcome to Coffee Shop App',
      });
      setTimeout(() => {
        navigation.navigate('Welcome');
      }, 1);
    }
    dispatch(addLogin({emailReducer: email}));
    setEmail('');
    setPassword();
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        style={styles.imgLogo}
        source={require('../../assets/Images/coffeeLogo.png')}
      />
      <Text style={styles.helloText}>Welcome back!</Text>
      <Text style={styles.helloText}>Glad to see you, Again!</Text>
      <View>
        <InputText
          placeholder="Email Address"
          onChangeText={setEmail}
          value={email}
        />
        <InputText
          placeholder="Password"
          onChangeText={setPassword}
          onPress={togglePasswordVisibility}
          secureTextEntry={!isPasswordVisible}
          imgLogoSource={
            isPasswordVisible
              ? require('../../assets/Images/visible.png')
              : require('../../assets/Images/hidden.png')
          }
        />
      </View>

      <Text
        style={styles.forgotText}
        onPress={() => navigation.navigate('ForgotPage')}>
        Forgot Password?
      </Text>
      <ButtonComponent onPress={handleOnSubmit} text="Login" />
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Login With</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialContainer}>
        <View style={styles.socialImgContainer}>
          <Image
            style={styles.socialLogo}
            source={require('../../assets/Images/fbLogo.png')}
          />
        </View>
        <View style={styles.socialImgContainer}>
          <Image
            style={styles.socialLogo}
            source={require('../../assets/Images/googleLogo.png')}
          />
        </View>
        <View style={styles.socialImgContainer}>
          <Image
            style={styles.socialLogo}
            source={require('../../assets/Images/appleLogo.png')}
          />
        </View>
      </View>
      <Text style={styles.alreadyText}>
        Don't have an account?
        <Text
          style={{
            color: '#d17842',
          }}
          onPress={() => navigation.navigate('Login')}>
          Register
        </Text>
      </Text>
    </ScrollView>
  );
};
export default SignUp;
