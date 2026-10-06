import { Image, StyleSheet, Text, View } from "react-native";

interface HeroCardProps {
  nome: string;
  classe: string;
}

export default function HeroCard({ nome, classe }: HeroCardProps) {
  return (
    <View style={styles.card}>

      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.classe}>Classe: {classe}</Text>
      </View>

      <Image
        style={styles.avatar}
        source={require("../app/assets/mm.jpg")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2535af",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  nome: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    color: "#f9716e",
  },

  classe: {
    fontFamily: "Poppins",
    fontSize: 14,
    marginTop: 5,
    color: "#f9716e",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#f5c97a",
    marginLeft: 15,
  },
});