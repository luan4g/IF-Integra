import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

import Header from "../../components/Header";

const B = (props) => (
  <Text style={{ fontWeight: "bold", color: "#000" }}>{props.children}</Text>
);

let likes = 0;
let liked = 0;

function Home({ route }) {
  const [like, setLike] = useState(false);
  const data = [
    {
      id: "0",
      name: "CRAD",
      user: require("../../../assets/userIcon.png"),
      data: "15 de Maio de 2020",
      image: require("../../../assets/noticia.jpg"),
      likes: likes,
      description:
        "Como forma de inclusão social e democratização de acesso ao desporto de participação, a Superintendência da Juventude, Cultura, Esporte e Lazer (Sejucel) inicia o planejamento do torneio que irá movimentar todas as comunidades indígenas do Estado, os Jogos Abertos da Comunidade Indígena (Jaci), criado por meio da Lei 4.346 de agosto de 2018.",
    },
    {
      id: "1",
      name: "CAEE",
      user: require("../../../assets/userIcon.png"),
      data: "14 de Maio de 2020",
      image: require("../../../assets/noticia2.jpg"),
      likes: likes,
      description:
        "Como forma de inclusão social e democratização de acesso ao desporto de participação, a Superintendência da Juventude, Cultura, Esporte e Lazer (Sejucel) inicia o planejamento do torneio que irá movimentar todas as comunidades indígenas do Estado, os Jogos Abertos da Comunidade Indígena (Jaci), criado por meio da Lei 4.346 de agosto de 2018.",
    },
  ];
  let lastTap;

  function toggleLike() {
    if (liked === 0) {
      setLike(true);
      likes++;
      liked = 1;
    }
  }

  function handleDoubleTap() {
    const now = Date.now();
    const DOUBLE_PRESS_TAP = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_TAP) {
      toggleLike();
    } else {
      lastTap = now;
    }
  }

  let iconName;
  handleStar();

  function handleStar() {
    if (liked === 1) {
      iconName = "star";
    } else {
      iconName = "staro";
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.home}>
        <View style={styles.posts}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.post}>
                <View style={styles.postHeader}>
                  <View style={styles.postUser}>
                    <Image style={styles.userPhoto} source={item.user} />
                    <Text style={styles.userName}>{item.name}</Text>
                  </View>
                  <Text style={styles.postData}>{item.data}</Text>
                </View>
                <View style={styles.postImage}>
                  <TouchableWithoutFeedback onPress={handleDoubleTap}>
                    <Image
                      style={{ height: "100%", width: "100%" }}
                      source={item.image}
                    />
                  </TouchableWithoutFeedback>
                </View>
                <View style={styles.postLegend}>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableWithoutFeedback onPress={toggleLike}>
                      <AntDesign
                        style={{ paddingHorizontal: 4 }}
                        name={iconName}
                        size={25}
                        color="#333"
                      />
                    </TouchableWithoutFeedback>
                    <AntDesign
                      style={{ paddingHorizontal: 4 }}
                      name="filetext1"
                      size={25}
                      color="#333"
                    />
                    <AntDesign
                      style={[styles.postLike, { paddingHorizontal: 4 }]}
                      name="sharealt"
                      size={25}
                      color="#333"
                    />
                    <AntDesign
                      style={styles.postShare}
                      name="pushpino"
                      size={25}
                      color="#333"
                    />
                  </View>
                  <Text style={styles.likes}>
                    Curtido por <B>{item.likes} pessoas</B>
                  </Text>
                  <Text numberOfLines={3} style={styles.postDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
