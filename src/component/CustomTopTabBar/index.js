import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const CustomTopTabBar = ({navigation}) => {
  const [activeTabId, setActiveTabId] = useState('1');

  const tabs = [
    {id: '1', name: 'All'},
    {id: '2', name: 'Cappuccino'},
    {id: '3', name: 'Espresso'},
    {id: '4', name: 'Americano'},
    // {name: 'Macchiato'},
  ];
  const handlePress = (tabId, routeName) => {
    setActiveTabId(tabId);
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          const isFocused = item.id === activeTabId;
          return (
            <View>
              <TouchableOpacity
                onPress={() => handlePress(item.id, item.name)}
                style={[styles.tab, isFocused ? styles.focusedTab : null]}>
                <View style={styles.tabContainer}>
                  <Text style={isFocused ? styles.focusedText : styles.text}>
                    {item.name}
                  </Text>
                  <Text>{isFocused && <View style={styles.dot} />}</Text>

                  {/* Dot below text */}
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomTopTabBar;

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontSize: 14,

    fontWeight: '600',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  focusedTab: {
    // borderBottomColor: '#D17842',
  },
  focusedText: {
    color: '#D17842',
    fontSize: 14,

    fontWeight: '600',
  },
  tabContainer: {
    alignItems: 'center',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#D17842',
    marginTop: 10,
  },
});
