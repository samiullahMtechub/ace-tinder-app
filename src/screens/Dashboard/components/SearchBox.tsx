import React, {useState} from 'react';
import {View, TextInput, Text, FlatList, StyleSheet} from 'react-native';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = () => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const isFound = searchHistory.includes(lowerCaseSearchText);

    // Update search history
    setSearchHistory(prevHistory =>
      isFound ? prevHistory : [...prevHistory, lowerCaseSearchText],
    );

    // Clear the input
    setSearchText('');
  };

  const highlightMatches = item => {
    const lowerCaseSearchText = searchText.toLowerCase();

    if (!lowerCaseSearchText) {
      // No search text, return the original item
      return <Text style={styles.historyItem}>{item}</Text>;
    }

    // Split the item into parts based on the search text
    const parts = item.split(new RegExp(`(${lowerCaseSearchText})`, 'gi'));

    return (
      <Text style={styles.historyItem}>
        {parts.map((part, index) =>
          part.toLowerCase() === lowerCaseSearchText ? (
            <Text key={index} style={styles.found}>
              {part}
            </Text>
          ) : (
            part
          ),
        )}
      </Text>
    );
  };

  const renderItem = ({item}) => highlightMatches(item);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.searchInput]}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search"
        onBlur={handleSearch}
      />
      <FlatList
        data={searchHistory}
        renderItem={renderItem}
        keyExtractor={item => item}
        style={styles.historyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  historyList: {
    marginTop: 10,
  },
  historyItem: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  found: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SearchBox;
