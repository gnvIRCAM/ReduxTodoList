import { FlatList } from "react-native";
import SingleTask from "./SingleTask";
import { useSelector } from "react-redux";
import { tasksSelector } from "./TaskSlice";

export default function TaskList() {
    const tasks = useSelector(tasksSelector); 
    return <FlatList 
            renderItem={({item, index}) => <SingleTask title={item} id={index}/>}
            data = {tasks}
            keyExtractor={(item, index) => index}
            />
}