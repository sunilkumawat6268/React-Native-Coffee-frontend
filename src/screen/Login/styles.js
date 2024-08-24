import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    backgroundColor: 'black',
  },
  helloText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
    margin: 15,
  },
  imgLogo: {
    width: 80,
    height: 80,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 150,
  },
  orText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 15,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  socialLogo: {
    width: 30,
    height: 30,
    margin: 20,
    tintColor: 'white',

    alignSelf: 'center',

    borderColor: '#141921',
  },
  socialContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  socialImgContainer: {
    backgroundColor: '#141921',
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,

    paddingLeft: 20,
    paddingRight: 20,
  },
  alreadyText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
  },
});
