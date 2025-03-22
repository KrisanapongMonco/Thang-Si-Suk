import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";

// Sample store data
interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  distance: string;
}

const stores: Store[] = [
  {
    id: "1",
    name: "Downtown Store",
    address: "123 Main St",
    city: "New York, NY",
    phone: "(212) 555-1234",
    distance: "0.5 miles",
  },
  {
    id: "2",
    name: "Uptown Store",
    address: "456 Park Ave",
    city: "New York, NY",
    phone: "(212) 555-5678",
    distance: "1.2 miles",
  },
  {
    id: "3",
    name: "Brooklyn Store",
    address: "789 Atlantic Ave",
    city: "Brooklyn, NY",
    phone: "(718) 555-9012",
    distance: "3.5 miles",
  },
  {
    id: "4",
    name: "Queens Store",
    address: "101 Queens Blvd",
    city: "Queens, NY",
    phone: "(718) 555-3456",
    distance: "5.7 miles",
  },
  {
    id: "5",
    name: "Bronx Store",
    address: "202 Grand Concourse",
    city: "Bronx, NY",
    phone: "(718) 555-7890",
    distance: "7.2 miles",
  },
];

const Store = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredStores = searchQuery
    ? stores.filter(
        (store) =>
          store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.city.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : stores;

  const renderStore = ({ item }: { item: Store }) => (
    <TouchableOpacity
      style={styles.storeCard}
      onPress={() => alert(`Viewing details for ${item.name}`)}
    >
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeAddress}>{item.address}</Text>
        <Text style={styles.storeCity}>{item.city}</Text>
        <Text style={styles.storePhone}>{item.phone}</Text>
      </View>
      <View style={styles.storeDistance}>
        <Text style={styles.distanceText}>{item.distance}</Text>
        <TouchableOpacity
          style={styles.directionsButton}
          onPress={() => alert(`Getting directions to ${item.name}`)}
        >
          <Text style={styles.directionsText}>Directions</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find a Store</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by city, address, or store name"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredStores}
        renderItem={renderStore}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.storeList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No stores found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "#007BFF",
    padding: 15,
    paddingTop: 50,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  searchContainer: {
    padding: 15,
  },
  searchInput: {
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  storeList: {
    padding: 15,
  },
  storeCard: {
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storeAddress: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
  storeCity: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
  storePhone: {
    fontSize: 14,
    color: "#666",
  },
  storeDistance: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  distanceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 10,
  },
  directionsButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  directionsText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});

export default Store;
