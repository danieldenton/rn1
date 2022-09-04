import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import splitLayoutProps from "react-native/Libraries/StyleSheet/splitLayoutProps";

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
        <View>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={cancelGoalHandler} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textIn: {
    borderWidth: 1,
    borderColor: "red",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
