import { StyleSheet, View, TextInput, Button } from "react-native";

export default function GoalInput({ addGoalHandler, goalInputHandler, enteredGoalText}) {
    
    return (
     <View style={styles.inputContainer}>
      <TextInput style={styles.textIn} 
      placeholder='Your course goal' 
      onChangeText={goalInputHandler}
      value={enteredGoalText}
      />
      <Button title='Add Goal' onPress={addGoalHandler}/>
     </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1
      },
      textIn: {
        borderWidth: 1,
        borderColor: 'red',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})