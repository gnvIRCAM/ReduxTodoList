import { Text, View, Button, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { removeTask } from "./TaskSlice"

export default function SingleTask(props) {
    const title = props.title; 
    const dispatch = useDispatch(); 
    const onRemove = () => {
        dispatch(removeTask(props.id))
    }
    return <View style={styles.container}>
        <Text>{title}</Text>
        <Button title= 'Delete' onPress={onRemove}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5
    },
  });