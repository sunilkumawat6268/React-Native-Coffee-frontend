import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IMAGE from '../../theme/Image';

const Header = ({
  heading,
  imageSource,
  onPress,
  imageSourceTwo,
  onPressEvent,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.hImg} source={imageSource} />
      </TouchableOpacity>

      <Text style={styles.heading}>{heading}</Text>
      <TouchableOpacity onPress={onPressEvent}>
        <Image style={styles.profileImg} source={imageSourceTwo} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  hImg: {
    width: 30,
    height: 30,
  },
  profileImg: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
