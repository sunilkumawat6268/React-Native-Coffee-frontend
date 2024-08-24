import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const InputText = ({
  value,
  placeholder,
  imageSource,
  onChangeText,
  imgLogoSource,
  onPress,
  secureTextEntry,
  style,
}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} styles={style} style={styles.image} />
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor="#595d63"
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        styles={style}
      />
      <TouchableOpacity onPress={onPress}>
        <Image source={imgLogoSource} style={styles.imgLogo} />
      </TouchableOpacity>
    </View>
  );
};
export default InputText;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141921',
    marginVertical: 6,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 22,
    padding: 10,
    border: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,

    flexDirection: 'row',
  },
  inputText: {
    color: 'white',
    width: 270,
    fontSize: 16,
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    tintColor: '#52555a',
  },
  imgLogo: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: 10,

    tintColor: '#595d63',
  },
});
