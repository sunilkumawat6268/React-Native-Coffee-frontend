import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  profileImg: {
    borderRadius: 90,
    width: 100,
    height: 100,
  },
  userImg: {
    width: 54,
    height: 54,
    marginTop: 10,
    marginLeft: 10,
  },
  secondContainer: {
    margin: 10,
  },
  listContainer: {
    flexDirection: 'row',
    marginTop: 10,
    margin: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  flatListContainer: {
    // flex: 1,
    backgroundColor: 'black',
    marginTop: 30,
  },
  userContainer: {
    flexDirection: 'row',
    // marginRight: 4,
    // flex: 0.6,

    marginBottom: 2,
    // margin: 10,
    // backgroundColor: 'white',
  },
  profileDataIcon: {
    width: 30,
    height: 30,

    tintColor: 'white',
  },
  listDataName: {
    color: 'white',
    marginLeft: 8,
    alignSelf: 'center',
    // fontWeight: 'bold',
    fontSize: 14,
  },
  emailId: {
    color: '#8F90A6',
    marginLeft: 8,
  },
  profileName: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 'bold',
    marginLeft: 4,
    // alignSelf: 'center',
    marginTop: 15,
    marginLeft: 8,
  },
  profileDataArrow: {
    tintColor: 'white',
    width: 16,
    height: 16,
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  nameArrowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  specialImage: {
    width: 30,
    height: 30,
    tintColor: '#d17842',
  },
  specialText: {
    color: '#d17842',
  },
  userEditContainer: {
    flexDirection: 'row',
    marginTop: 15,
    position: 'absolute',
    right: 10,
    top: 0,
  },
  userArrow: {
    alignItems: 'flex-end',
    width: 18,
    alignSelf: 'center',
    height: 18,
    tintColor: '#8F90A6',
  },
  userEditText: {
    color: '#8F90A6',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'flex-end',
  },
});
