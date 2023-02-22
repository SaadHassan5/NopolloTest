import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { HP } from '../../assets/config/screen-ratio';
import { API_Calls } from '../../auth/ApiCalls';
import { ApiConsts } from '../../auth/Api_Consts';
import ProgressBarView from '../../components/ProgressBarView/ProgressBarView';
import TaskView from '../../components/TaskView/TaskView';
import { GlobalStyles } from '../../global/globalStyles';
import { NopolloStyles as Styles } from './styles';

const TestScreen = () => {
    const [allTodos, setAllTodos] = useState([])
    const [completedTasks, setCompletedTasks] = useState(0)
    useEffect(() => {
        getAllTodos();
    }, [])
    const getAllTodos = async () => {
        const res = await API_Calls.For_GET(ApiConsts.getAll);
        setAllTodos(res)
        let count = 0;
        res?.map((k) => {
            if (k?.completed == 1)
                count = count + 1;
        })
        setCompletedTasks(count)
    }
    return (
        <SafeAreaView style={GlobalStyles.container}>
            {/* Fixed */}
            <ScrollView style={{flex:1,}} contentContainerStyle={{paddingVertical:HP(10), ...Styles.progressView }}>
                <View style={{}}>
                    <ProgressBarView showTasks={completedTasks} tasks={completedTasks/allTodos?.length} />
                    <View>
                        <Text style={{ ...Styles.taskTxt }}>Tasks</Text>
                        <View>
                            <TaskView tasks={allTodos} setTasks={setAllTodos} onGetAll={getAllTodos} />

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default TestScreen;
