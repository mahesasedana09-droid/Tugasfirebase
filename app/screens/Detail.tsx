import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useRoute, NavigationProp } from "@react-navigation/native";

type Car = {
  name: string;
  description: string;
  speed: string;
  engine: string;
  price: string;
};

const Details = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const route = useRoute<RouteProp<{ params: { car: Car } }, "params">>();
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{car.name}</Text>
      <Text style={styles.desc}>{car.description}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>🏎️ Kecepatan Maksimum</Text>
        <Text style={styles.value}>{car.speed}</Text>

        <Text style={styles.label}>⚙️ Mesin</Text>
        <Text style={styles.value}>{car.engine}</Text>

        <Text style={styles.label}>💰 Harga</Text>
        <Text style={styles.value}>{car.price}</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  desc: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 20,
  },
  infoBox: {
    backgroundColor: "#1b1b1b",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    elevation: 5,
    marginBottom: 40,
  },
  label: {
    color: "#3b82f6",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },
  value: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
  },
  backButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  backText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
