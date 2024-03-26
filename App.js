import { StyleSheet, View } from "react-native";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Provider } from "react-redux";
import store from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddTask/>
        <TaskList/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'space-evenly',
    justifyContent: 'center',
  },
});