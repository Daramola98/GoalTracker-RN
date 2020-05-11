import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ goal, onGoalDelete }) => {
  return (
    <TouchableOpacity onPress={onGoalDelete.bind(this, goal.id)}>
      <View style={styles.listItem}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: "#ccc",
  },
});

export default GoalItem;
