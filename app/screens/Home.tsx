import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { NavigationProp } from "@react-navigation/native";

const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const handleLogout = async () => {
    await FIREBASE_AUTH.signOut();
  };

  const cars = [
    {
      name: "Lamborghini Aventador",
      description: "Kecepatan dan kemewahan bersatu dalam desain ikonik.",
    },
    {
      name: "Ferrari Roma",
      description: "Elegan, sporty, dan berjiwa Italia yang autentik.",
    },
    {
      name: "Rolls-Royce Phantom",
      description: "Simbol kemewahan tertinggi dengan kenyamanan tak tertandingi.",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0d0d0d" />
      <Text style={styles.headerTitle}>🏎️ Luxury Car Gallery</Text>
      <Text style={styles.subtitle}>Pilih mobil impianmu dan jelajahi kemewahan</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {cars.map((car, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate("Details", { car })}
          >
            <View style={styles.cardContent}>
              <Text style={styles.carName}>{car.name}</Text>
              <Text style={styles.carDesc}>{car.description}</Text>
              <View style={styles.detailButton}>
                <Text style={styles.detailText}>Lihat Detail →</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#f8f8f8",
    textAlign: "center",
  },
  subtitle: {
    color: "#a9a9a9",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#1b1b1b",
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  cardContent: {
    flexDirection: "column",
  },
  carName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#e5e5e5",
    marginBottom: 8,
  },
  carDesc: {
    color: "#c7c7c7",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  detailButton: {
    alignSelf: "flex-start",
    backgroundColor: "#3b82f6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  detailText: {
    color: "#fff",
    fontWeight: "600",
  },
  logoutButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#ff4b5c",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 4,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
