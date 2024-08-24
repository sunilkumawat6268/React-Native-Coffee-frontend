import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonComponent = ({
  text,
  onPress,
  customStyles,
  cost,
  price,
  onPressOut,
  onPressIn,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.touchable, customStyles]}
        onPress={onPress}
        onPressOut={onPressOut}
        onPressIn={onPressIn}>
        <Text style={styles.textBtn}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonComponent;
const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#d17842',
    marginVertical: 8,
    padding: 15,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  textBtn: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 20,

    marginLeft: 15,
  },
  container: {
    // flexDirection: 'row',
  },
  textPrice: {
    color: '#AEAEAE',

    marginLeft: 15,
    // alignSelf: 'center',
  },
});
