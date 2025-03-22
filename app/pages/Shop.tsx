import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

// Define product interface
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: "19.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Product 2",
    price: "29.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Product 3",
    price: "39.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Product 4",
    price: "49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "Product 5",
    price: "59.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    name: "Product 6",
    price: "69.99",
    image: "https://via.placeholder.com/150",
  },
];

const Shop = () => {
  const router = useRouter();

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => alert(`Viewing ${item.name}`)}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => alert(`Added ${item.name} to cart!`)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
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
  productList: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default Shop;
