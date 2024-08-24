import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import InputText from '../../component/Input';
import ButtonComponent from '../../component/Button';
import Toast from 'react-native-toast-message';
import styles from './styles';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState('');
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  const handleOnSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length < 4 || name.length > 20) {
      Toast.show({
        type: 'error',
        text1: 'Username Required',
        text2: 'Name should be between 4 and 20 characters',
      });
    } else if (!emailRegex.test(email)) {
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
    } else if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Check Password',
        text2: 'Password must match',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Register Successfully',
        text2: 'Welcome to Coffee Shop App',
        onHide: () => {
          navigation.navigate('Welcome');
        },
      });
    }
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        style={styles.imgLogo}
        source={require('../../assets/Images/coffeeLogo.png')}
      />
      <Text style={styles.helloText}>Hello, Register here to get started.</Text>
      <View>
        <InputText placeholder="Full Name" onChangeText={setName} />
        <InputText placeholder="Email Address" onChangeText={setEmail} />
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
        <InputText
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          onPress={toggleConfirmPasswordVisibility}
          secureTextEntry={!isConfirmPasswordVisible}
          imgLogoSource={
            isConfirmPasswordVisible
              ? require('../../assets/Images/visible.png')
              : require('../../assets/Images/hidden.png')
          }
        />
      </View>
      <ButtonComponent onPress={handleOnSubmit} text="Register" />
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Register With</Text>
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
        Already have an account?
        <Text
          style={{color: '#d17842'}}
          onPress={() => navigation.navigate('SignUp')}>
          {' '}
          Login
        </Text>
      </Text>
    </ScrollView>
  );
};
export default Login;
