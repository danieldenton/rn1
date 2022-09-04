import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
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
      { text: enteredGoalText, id: Math.random().toString() }
    ])
    setEnteredGoalText('')
  }

  function handleDelete(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
     <GoalInput 
     addGoalHandler={addGoalHandler} 
     goalInputHandler={goalInputHandler}
     enteredGoalText={enteredGoalText}
     />
     <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => { 
          return <GoalItem 
          text={itemData.item.text} 
          handleDelete={handleDelete}
          id={itemData.item.id}
          />
        }}
        keyExtractor={(item, index) => {
          return item.id
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
   paddingHorizontal: 26
  },
  goalsContainer: {
    flex: 5,
    borderWidth: 1,
    borderColor: 'red'
  },
 
});
