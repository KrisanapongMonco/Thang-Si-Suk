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

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ค้นหาตำแหน่ง</Text>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <Image
          source={{
            uri: "https://maps.googleapis.com/maps/api/staticmap?center=13.7563,100.5018&zoom=11&size=600x400&markers=color:red|13.7563,100.5018&key=YOUR_API_KEY",
          }}
          style={styles.mapImage}
          resizeMode="cover"
        />
        <View style={styles.mapOverlay}>
          <Text style={styles.mapText}>แผนที่จะแสดงตรงนี้</Text>
          <Text style={styles.mapSubtext}>
            (จำเป็นต้องใช้ Google Maps API key จริงเพื่อแสดงแผนที่)
          </Text>
        </View>
      </View>

      {/* Nearby places */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>สถานที่ใกล้เคียง</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>ดูทั้งหมด</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.placesList}>
        <TouchableOpacity style={styles.placeItem}>
          <View style={styles.placeIcon}>
            <Text style={styles.placeIconText}>🏬</Text>
          </View>
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>สาขา กรุงเทพฯ</Text>
            <Text style={styles.placeAddress}>123 ถนนสุขุมวิท, กรุงเทพฯ</Text>
            <Text style={styles.placeDistance}>ห่าง 2.5 กม.</Text>
          </View>
          <TouchableOpacity style={styles.directionButton}>
            <Text style={styles.directionButtonText}>นำทาง</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.placeItem}>
          <View style={styles.placeIcon}>
            <Text style={styles.placeIconText}>🏬</Text>
          </View>
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>สาขา นนทบุรี</Text>
            <Text style={styles.placeAddress}>456 ถนนติวานนท์, นนทบุรี</Text>
            <Text style={styles.placeDistance}>ห่าง 7.2 กม.</Text>
          </View>
          <TouchableOpacity style={styles.directionButton}>
            <Text style={styles.directionButtonText}>นำทาง</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.placeItem}>
          <View style={styles.placeIcon}>
            <Text style={styles.placeIconText}>🏬</Text>
          </View>
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>สาขา ปทุมธานี</Text>
            <Text style={styles.placeAddress}>
              789 ถนนรังสิต-นครนายก, ปทุมธานี
            </Text>
            <Text style={styles.placeDistance}>ห่าง 15.8 กม.</Text>
          </View>
          <TouchableOpacity style={styles.directionButton}>
            <Text style={styles.directionButtonText}>นำทาง</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
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
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchIcon: {
    fontSize: 24,
  },
  mapContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#e1e1e1",
    position: "relative",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  mapText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  mapSubtext: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#007BFF",
    fontSize: 14,
  },
  placesList: {
    flex: 1,
    padding: 10,
  },
  placeItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  placeIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  placeIconText: {
    fontSize: 24,
  },
  placeInfo: {
    flex: 1,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  placeAddress: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },
  placeDistance: {
    fontSize: 14,
    color: "#007BFF",
  },
  directionButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    alignSelf: "center",
  },
  directionButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
