import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
        <TextInput
          style={styles.textIn}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.addButton}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
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
    paddingTop: 350,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textIn: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "80%",
    marginRight: 8,
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
});
