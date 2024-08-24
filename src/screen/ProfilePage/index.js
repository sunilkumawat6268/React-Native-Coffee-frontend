import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import IMAGE from '../../theme/Image';
import {styles} from './styles';
import {FlatList} from 'react-native';
import ProfileMockData from '../../mockData/ProfileMockData';

const ProfilePage = ({navigation}) => {
  const handlePress = id => {
    switch (id) {
      case 1:
        navigation.navigate('Welcome');
        break;
      case 2:
        navigation.navigate('Settings');
        break;
      case 3:
        navigation.navigate('Payment');
        break;

      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        {/* <Image style={styles.profileImg} source={IMAGE.headerProfile} />
         */}
        <View style={styles.userContainer}>
          <Image style={styles.userImg} source={IMAGE.headerProfile} />
          <View>
            <Text style={styles.profileName}>John Doe</Text>

            <Text style={styles.emailId}>john@gmail.com</Text>
          </View>
          <View style={styles.userEditContainer}>
            <Text style={styles.userEditText}>Edit</Text>

            <Image style={styles.userArrow} source={IMAGE.forwardArrow} />
          </View>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={ProfileMockData}
            renderItem={({item}) => {
              const isSpecialItem = item.id === 4;
              return (
                <View>
                  <TouchableOpacity
                    style={styles.listContainer}
                    onPress={() => handlePress(item.id)}>
                    <View style={styles.leftContainer}>
                      <Image
                        style={[
                          styles.profileDataIcon,
                          isSpecialItem && styles.specialImage,
                        ]}
                        source={item.image}
                      />
                      <Text
                        style={[
                          styles.listDataName,
                          isSpecialItem && styles.specialText,
                        ]}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.nameArrowContainer}>
                      <Image
                        style={styles.profileDataArrow}
                        source={item.imageArrow}
                      />
                      {/* <Text style={styles.testName}>{item.name}</Text> */}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfilePage;
