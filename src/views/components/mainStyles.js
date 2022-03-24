import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  titleText: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.1,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "SourceSansProBold",
    fontSize: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
    backgroundColor: "#05A895B2",
    opacity: 0.95,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    fontFamily: "SourceSansProBold",
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#05A895B2",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontFamily: "SourceSansProRegular",
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#05A895B2",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    flex: 5,
  },
  loginButtonText: {
    color: "#fff",
    fontFamily: "SourceSansProRegular",
    alignSelf: "center",
    fontSize: 18,
  },
  registerText: {
    alignSelf: "center",
    marginTop: 12,
    fontFamily: "SourceSansProRegular",
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: "flex-end",
    fontFamily: "SourceSansProBold",
    fontSize: 16,
    color: "#FB5A48",
  },
});

export default styles;
