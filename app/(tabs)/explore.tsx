import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Define product type
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

// Define store type
interface Store {
  id: string;
  name: string;
  address: string;
  category: string;
  contact: string;
}

// ข้อมูลสินค้าตัวอย่าง
const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "สินค้า A",
    price: "฿350",
    image: "https://placekitten.com/200/200",
    category: "อาหารเสริม",
  },
  {
    id: "2",
    name: "สินค้า B",
    price: "฿580",
    image: "https://placekitten.com/201/201",
    category: "อาหารเสริม",
  },
  {
    id: "3",
    name: "สินค้า C",
    price: "฿220",
    image: "https://placekitten.com/202/202",
    category: "เครื่องดื่ม",
  },
  {
    id: "4",
    name: "สินค้า D",
    price: "฿490",
    image: "https://placekitten.com/203/203",
    category: "เครื่องดื่ม",
  },
  {
    id: "5",
    name: "สินค้า E",
    price: "฿750",
    image: "https://placekitten.com/204/204",
    category: "ของใช้",
  },
  {
    id: "6",
    name: "สินค้า F",
    price: "฿300",
    image: "https://placekitten.com/205/205",
    category: "ของใช้",
  },
];

// Sample store data
const STORES: Store[] = [
  {
    id: "1",
    name: "ร้าน A",
    address: "123 ถนนหลัก, กรุงเทพฯ",
    category: "อาหาร",
    contact: "เบอร์โทร: 012-345-6789",
  },
  {
    id: "2",
    name: "ร้าน B",
    address: "456 ถนนรอง, กรุงเทพฯ",
    category: "เครื่องดื่ม",
    contact: "เบอร์โทร: 987-654-3210",
  },
  // เพิ่มข้อมูลร้านค้าเพิ่มเติมที่นี่
];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStores = STORES.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ เพิ่ม</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderStoreItem = ({ item }: { item: Store }) => (
    <TouchableOpacity style={styles.storeItem}>
      <Text style={styles.storeName}>{item.name}</Text>
      <Text style={styles.storeAddress}>{item.address}</Text>
      <Text style={styles.storeCategory}>{item.category}</Text>
      <Text style={styles.storeContact}>{item.contact}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>เพิ่ม</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>🚛</Text>
          <Text style={styles.headerTitle}>THANGSISUK</Text>
        </View>
        <View style={styles.headerIcons}>
          <Text style={styles.iconButton}>📍</Text>
          <Text style={styles.iconButton}>💬</Text>
        </View>
      </View>

      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.categoryButton, styles.categoryActive]}
          >
            <Text style={styles.categoryActiveText}>ทั้งหมด</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>อาหารเสริม</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>เครื่องดื่ม</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>ของใช้</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>เครื่องสำอาง</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="ค้นหาร้านค้า..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredStores}
        renderItem={renderStoreItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.storeList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#c4ff36", // สีเขียวอ่อนตามภาพ
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchIcon: {
    fontSize: 24,
  },
  categories: {
    backgroundColor: "white",
    paddingVertical: 10,
    marginBottom: 10,
  },
  ScrollView: {
    flexDirection: "row",
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  categoryActive: {
    backgroundColor: "#007BFF",
  },
  categoryText: {
    color: "#666",
    fontSize: 14,
  },
  categoryActiveText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  productList: {
    padding: 10,
  },
  productItem: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 5,
    marginBottom: 8,
  },
  productInfo: {
    marginBottom: 10,
  },
  category: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  storeList: {
    paddingBottom: 20,
  },
  storeItem: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeAddress: {
    fontSize: 14,
    color: "#666",
  },
  storeCategory: {
    fontSize: 14,
    color: "#007BFF",
  },
  storeContact: {
    fontSize: 14,
    color: "#666",
  },
  iconButton: {
    fontSize: 24,
    marginLeft: 15,
  },
  headerIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});
