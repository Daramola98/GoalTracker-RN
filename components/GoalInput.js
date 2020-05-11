import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoal, isVisible, onCancelGoalAddition }) => {
  const [inputGoal, setInputGoal] = useState("");

  const inputGoalHandler = (value) => {
    setInputGoal(value);
  };

  const onAddGoalHandler = () => {
    onAddGoal(inputGoal);
    setInputGoal("");
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.goalInputWrapper}>
        <TextInput
          style={styles.goalTextInput}
          placeholder="Course Goal"
          value={inputGoal}
          onChangeText={inputGoalHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancelGoalAddition} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={onAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  goalInputWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  goalTextInput: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
