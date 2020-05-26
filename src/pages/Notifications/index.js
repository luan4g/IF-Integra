import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

import { dataNot } from "../../data/notifications";

import Header from "../../components/Header";
import Modal from "../../components/Modal";

function Notifications() {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.list}>
        <FlatList
          data={dataNot}
          renderItem={({ item }) => (
            <>
              <View style={styles.not}>
                <Image style={styles.notIcon} source={item.notIcon} />
                <View style={styles.notColumn}>
                  <Text style={styles.notName}>{item.notName}</Text>
                  <Text style={styles.notDesc} numberOfLines={3}>
                    {item.notDesc}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonIcon}
                  onPress={() => {
                    setModal(true);
                    setId(`${item.notId}`);
                  }}
                >
                  <Entypo name="resize-full-screen" size={19} color="#000" />
                </TouchableOpacity>
              </View>
            </>
          )}
          keyExtractor={(item) => item.notId}
        />
        <Modal
          style={styles.modal}
          show={modal}
          id={id}
          close={() => setModal(false)}
        />
      </View>
    </View>
  );
}

export default Notifications;
