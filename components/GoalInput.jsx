import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function GoalInput({ addGoalHandler, goalInputHandler}) {
    
    return (
     <View style={styles.inputContainer}>
      <TextInput style={styles.textIn} 
      placeholder='Your course goal' 
      onChangeText={goalInputHandler}/>
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
        width: '80%',
        marginRight: 8,
        padding: 8
      },
})