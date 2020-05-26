import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { dataNot } from "../data/notifications";

const { height } = Dimensions.get("window");

function Modal({ show, close, id }) {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  function OpenModal() {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();

    console.log(dataNot);
  }

  function CloseModal() {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 }),
    ]).start();
  }

  useEffect(() => {
    if (show) {
      OpenModal();
    } else {
      CloseModal();
    }
  }, [show]);

  return (
    <Animated.View
      style={[
        styles.popup,
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}
    >
      <Animated.View
        style={[
          styles.popupContent,
          {
            transform: [{ translateY: state.modal }],
          },
        ]}
      >
        <View style={styles.beauty}>
          <View style={styles.indicator} />
        </View>
        <View style={styles.popInfo}>
          <Image
            style={styles.popIcon}
            source={dataNot.map((item) =>
              item.notId === id ? item.notIcon : ""
            )}
          />
          <Text style={styles.popName}>
            {dataNot.map((item) => (item.notId === id ? item.notName : ""))}
          </Text>
          <TouchableOpacity style={styles.buttonIcon} onPress={close}>
            <Entypo name="resize-100-" size={19} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.popDesc}>
          <Text style={{ textAlign: "center" }}>
            {dataNot.map((item) => (item.notId === id ? item.notDesc : ""))}
          </Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  popup: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  popupContent: {
    position: "absolute",
    height: "55%",
    width: "100%",
    backgroundColor: "#fff",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  popInfo: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    borderColor: "#00000088",
    padding: 10,
    alignItems: "center",
  },
  popIcon: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  buttonIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    borderRadius: 25,
    elevation: 3,
  },
  popName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  popDesc: {
    margin: 10,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#000",
    marginVertical: 10,
  },
  indicator: {
    height: 6,
    width: "30%",
    backgroundColor: "#000",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 3,
  },
});

export default Modal;
