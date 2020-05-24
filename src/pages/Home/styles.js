import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  home: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  home1: {
    marginRight: "auto",
    marginLeft: 15,
  },
  home2: {
    marginRight: 15,
    marginLeft: "auto",
  },
  posts: {
    height: "81%",
    width: "100%",
    marginTop: 75,
  },
  post: {
    width: "100%",
  },
  postHeader: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
  },
  postUser: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
  },
  userPhoto: {
    height: 35,
    width: 35,
    marginHorizontal: 6,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postData: {
    marginRight: 6,
    fontSize: 12,
    color: "#bbbbbb",
  },
  postImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
  },
  postLegend: {
    width: "100%",
    padding: 8,
  },
  postLike: {
    marginRight: "auto",
  },
  postShare: {
    marginLeft: "auto",
  },
  likes: {
    marginTop: 8,
    color: "#999",
  },
});

export default styles;
