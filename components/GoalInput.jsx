import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({
  addGoalHandler,
  goalInputHandler,
  enteredGoalText,
  modalIsVisible,
  cancelGoalHandler,
}) {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/img.jpeg")} />
        <TextInput
          style={styles.textIn}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.addButton}>
            <Button title="Add Goal" onPress={addGoalHandler} color="black" />
          </View>
          <View style={styles.cancelButton}>
            <Button title="Cancel" onPress={cancelGoalHandler} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textIn: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 6,
    width: "80%",
    marginTop: 20,
    padding: 15,
  },
  buttonContainer: {
    margin: 20,
  },
  addButton: {
    margin: 10,
    color: "#5e0acc",
  },
  cancelButton: {
    margin: 5,
  },
  image: {
    height: 300,
    width: 300,
  },
});
