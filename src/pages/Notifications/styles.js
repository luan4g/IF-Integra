import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 10,
    borderRadius: 25,
    elevation: 3,
  },
  list: {
    height: "81%",
    width: "100%",
    marginTop: 75,
  },
  not: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  notColumn: {
    width: "55%",
  },
  notIcon: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginRight: 15,
  },
  notName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  notDesc: {
    color: "#999",
  },
});

export default styles;
