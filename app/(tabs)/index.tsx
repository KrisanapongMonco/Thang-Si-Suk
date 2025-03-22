import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
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

      <ScrollView style={styles.scrollView}>
        {/* Main Cards */}
        <View style={styles.cardsContainer}>
          <View style={styles.mainCard}></View>
          <View style={styles.smallCard}></View>
        </View>

        {/* Menu Icons */}
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/pages/Shop")}
          >
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>🏪</Text>
            </View>
            <Text style={styles.menuText}>ร้านค้า</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>📄</Text>
            </View>
            <Text style={styles.menuText}>โพสต์ขาย</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/pages/Store")}
          >
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>🏬</Text>
            </View>
            <Text style={styles.menuText}>บริจาค</Text>
          </TouchableOpacity>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerSection}>
          <Image
            source={{ uri: "https://placekitten.com/400/120" }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        {/* Promotion Cards */}
        <View style={styles.promotionSection}>
          <Text style={styles.sectionTitle}>โปรโมชั่นสินค้า</Text>
          <Image
            source={{ uri: "https://placekitten.com/400/200" }}
            style={styles.promotionImage}
            resizeMode="cover"
          />
        </View>

        {/* News Section */}
        <View style={styles.newsSection}>
          <Text style={styles.sectionTitle}>ข่าวสารและกิจกรรม</Text>
          <Image
            source={{ uri: "https://placekitten.com/400/200" }}
            style={styles.newsImage}
            resizeMode="cover"
          />
        </View>

        {/* Spacing at the bottom */}
        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#c4ff36", // สีเขียวอ่อนตามภาพ
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconButton: {
    fontSize: 24,
    marginLeft: 15,
  },
  scrollView: {
    flex: 1,
  },
  cardsContainer: {
    flexDirection: "row",
    padding: 10,
  },
  mainCard: {
    flex: 2,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  smallCard: {
    flex: 1,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 20,
  },
  menuItem: {
    alignItems: "center",
  },
  menuIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 5,
  },
  menuIconText: {
    fontSize: 30,
  },
  menuText: {
    fontSize: 14,
    fontWeight: "500",
  },
  bannerSection: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  promotionSection: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  promotionImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  newsSection: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  newsImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
