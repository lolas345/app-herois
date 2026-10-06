import { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (nome: string, classe: string) => void;
}

export default function CustomModal({
  visible,
  onClose,
  onSave,
}: CustomModalProps) {
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");

  function salvar() {
    if (nome.trim() === "" || classe.trim() === "") {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha o nome e a classe do herói."
      );
      return;
    }

    onSave(nome, classe);

    setNome("");
    setClasse("");
  }

  function fechar() {
    setNome("");
    setClasse("");
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={fechar}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.titulo}>Criar Herói</Text>

          <Text style={styles.label}>Nome do Herói</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Classe</Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Guerreiro"
            value={classe}
            onChangeText={setClasse}
          />

          <Image
            style={styles.avatar}
            source={require("../app/assets/personagens.jpg")}
          />

          <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={salvar}
          >
            <Text style={styles.textoBotao}>Salvar Herói</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCancelar}
            onPress={fechar}
          >
            <Text style={styles.textoCancelar}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "85%",
    backgroundColor: "#0f2470",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },

  titulo: {
    fontFamily: "BangersBold",
    fontSize: 24,
    marginBottom: 15,
    color: "#d56565",
  },

  avatar: {
  width: 80,
  height: 80,
  borderRadius: 40,
  marginRight: 15,
  resizeMode: "cover",
  },

  label: {
    width: "100%",
    fontFamily: "Bangers",
    fontSize: 14,
    marginBottom: 5,
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#4b0909",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontFamily: "Bangers",
    marginBottom: 15,
    color: "#fff",
  },

  botaoSalvar: {
    width: "100%",
    backgroundColor: "#7e0907",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  textoBotao: {
    color: "#fff",
    fontFamily: "Bangers",
    fontSize: 15,
  },

  botaoCancelar: {
    marginTop: 15,
  },

  textoCancelar: {
    fontFamily: "Bangers",
    color: "#e7dcdc",
  },
  
});