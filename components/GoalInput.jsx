import { StyleSheet } from "react-native";

export default function GoalInput({ goalInputHandler, addGoalHandler}) {
    return (
     <View style={styles.inputContainer}>
      <TextInput style={styles.textIn} 
      placeholder='Your course goal' 
      onChangeText={goalInputHandler}/>
      <Button title='Add Goal' onPress={addGoalHandler}/>
     </View>
    )
}