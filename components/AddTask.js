import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "./TaskSlice";

export default function AddTask() {
    const [taskName, setTaskName] = useState(''); 
    
    // dispatcher pour communiquer les actions
    // au store
    const dispatch = useDispatch();
    
    // On effectue l'action d'ajouter 
    // une nouvelle tache 
    const addNewTask = () => {
        dispatch(addTask(taskName));
        setTaskName(''); 
    }   

    return <View style={styles.container}>
            <TextInput 
            placeholder="Enter task" 
            onChangeText={setTaskName} 
            value={taskName}
            />
            <Button title="Add" onPress={addNewTask}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
      height: 30, 
      marginTop: 40, 
      marginLeft: '25%', 
      width: 200, 
      flexDirection: 'row', 
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
  });