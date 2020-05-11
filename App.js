import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addCourseGoalHandler = (courseGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: courseGoal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const onCancelGoalAddition = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Course Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        isVisible={isAddMode}
        onAddGoal={addCourseGoalHandler}
        onCancelGoalAddition={onCancelGoalAddition}
      />
      <FlatList
        data={courseGoals}
        renderItem={({ item }) => (
          <GoalItem onGoalDelete={removeGoalHandler} goal={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
