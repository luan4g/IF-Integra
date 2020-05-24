import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

import Header from "../../components/Header";
import Modal from "../../components/Modal";

function Notifications() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.list}>
        <View style={styles.not}>
          <Image
            style={styles.notIcon}
            source={require("../../../assets/userIcon.png")}
          />
          <View style={styles.notColumn}>
            <Text style={styles.notName}>CAEE</Text>
            <Text style={styles.notDesc} numberOfLines={3}>
              Atualização do calendário acadêmico acaba de ser lançado na aba de
              horário academico para que todos possam acessar e verificar tudo
              que está pré programado para ocorrer neste ano de 2020, verifiquem
              assim que possível, para uma possível dúvida.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonIcon}
            onPress={() => setModal(true)}
          >
            <Entypo name="resize-full-screen" size={19} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <Modal show={modal} close={() => setModal(false)} />
    </View>
  );
}

export default Notifications;
