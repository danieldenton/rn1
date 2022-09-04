
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
const [courseGoals, setCourseGoals] = useState([])
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ])
  }

  return (
    <View style={styles.appContainer}>
     return <GoalInput addGoalHandler={addGoalHandler} goalInputHandler={goalInputHandler}/>
     <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => { 
         return <GoalItem text={itemData.item.text}/>
        }}
      alwaysBounceVertical={false}
      />
      

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
   paddingTop: 60,
   paddingHorizontal: 16
  },  
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
  goalsContainer: {
    flex: 5,
    borderWidth: 1,
    borderColor: 'red'
  },
});
