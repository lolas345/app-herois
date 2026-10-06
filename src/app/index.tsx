import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
} from "react-native";

import { useFonts } from "expo-font";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import * as SplashScreen from "expo-splash-screen";

import CustomModal from "../components/CustomModal";
import HeroCard from "../components/HeroCard";

interface Hero {
  id: string;
  nome: string;
  classe: string;
}

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [herois, setHerois] = useState<Hero[]>([]);

  const [loaded, error] = useFonts({
    Bangers: Bangers_400Regular,
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  function adicionarHeroi(nome: string, classe: string) {
    const novoHeroi: Hero = {
      id: Date.now().toString(),
      nome: nome,
      classe: classe,
    };

    setHerois((listaAtual) => [...listaAtual, novoHeroi]);
    setModalVisible(false);
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/capafundo.jpg")}
      resizeMode="cover"
    >
      <View style={styles.conteudo}>
      
        <Text style={styles.titulo}>Guilda de Heróis</Text>

      
        {herois.length === 0 ? (
          <View style={styles.vazio}>
            <Text style={styles.vazio}>
              Nenhum herói cadastrado ainda.
            </Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textoBotao}>Criar Herói</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={herois}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.lista}
            renderItem={({ item }) => (
              <HeroCard
                nome={item.nome}
                classe={item.classe}
              />
            )}
            ListFooterComponent={
              <TouchableOpacity
                style={styles.botao}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textoBotao}>Criar Herói</Text>
              </TouchableOpacity>
            }
          />
        )}

      
        <CustomModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={adicionarHeroi}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 90,
  },

  titulo: {
    fontFamily: "Bangers",
    fontSize: 50,
    textAlign: "center",
    marginBottom: 30,
    color: "#fff",
  },

  lista: {
    alignItems: "center",
    paddingBottom: 30,
  },

  vazio: {
    fontFamily: "Bangers",
    textAlign: "center",
    marginTop: 50,
    color: "#ede3e3",
    fontSize: 18,
  },

  botao: {
    backgroundColor: "#2535af",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    minHeight: 40,
    marginTop: 15,
    paddingHorizontal: 20,
  },

  textoBotao: {
    color: "#fff",
    fontFamily: "Bangers",
    fontSize: 18,
  },
});