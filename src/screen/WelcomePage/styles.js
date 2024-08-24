import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  welText: {
    color: 'white',
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 80,

    // alignItems: 'center',
    margin: 15,
  },
  welImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },

  continueText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  continueBtn: {
    backgroundColor: '#d17842',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    padding: 15,
    width: 350,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  bgImg: {
    flex: 1,
  },
});
