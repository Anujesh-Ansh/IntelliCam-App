import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { Text, View } from '@/components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import { Link, Tabs } from 'expo-router';

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Filter button */}
        <Pressable style={styles.filterButton}>
          <Ionicons name="options-outline" size={24} color="black" />
        </Pressable>
        {/* Search bar */}
        <SearchBar
          platform="default" // Add the platform property with a value of "default"
          placeholder="Search..."
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
        />
        <Pressable style={styles.filterButton}>
          <Ionicons name="mic-outline" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView style={styles.lowerView}>
        {/* Refrigerator items */}
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Milk</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Eggs</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Cheese</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Yogurt</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Carrot</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Broccoli</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Tomato</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Spinach</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Bell Pepper</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Apple</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Banana</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Orange</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Grape</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Strawberry</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Juice</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Water</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Soda</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Lettuce</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Cucumber</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Onion</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Garlic</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Lemon</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Lime</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Pineapple</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Mango</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Peach</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Pear</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Plum</Text>
          </Pressable>
        </Link>
        <Link href="/Details" asChild>
          <Pressable style={styles.listingItem}>
            <Text style={styles.listingText}>• Kiwi</Text>
          </Pressable>
        </Link>


        
        {/* Add more refrigerator items here */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  lowerView: {
    paddingLeft: 20,
  },
  listingItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listingText: {
    fontSize: 20,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
  },
  filterButton: {
    padding: 10,
    borderRadius: 9,
    backgroundColor: '#ccc',
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchBarInputContainer: {
    borderRadius: 9,
    backgroundColor: '#f0f0f0',
  },
});
