import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Checkbox, ProgressBar } from 'react-native-paper';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import AlertService from '../../assets/service/alert';
import { SVGS } from '../../assets/svgs';
import { API_Calls } from '../../auth/ApiCalls';
import { ApiConsts } from '../../auth/Api_Consts';
import { GlobalStyles } from '../../global/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
const TaskView = ({ props, sty = {}, tasks = [], setTasks,onGetAll }) => {
    const [isDel, setIsDel] = useState()
    const [title, setTitle] = useState('')

    const Styles = StyleSheet.create({
        titleTxt: {
            ...GlobalStyles.regularTxt, fontSize: 16
        },
        taskView: {
            ...GlobalStyles?.row, justifyContent: "space-between", ...GlobalStyles.card,
            borderRadius: WP(10)
        },

        inpView: {
            ...GlobalStyles?.card, paddingVertical: HP(.5),
            borderRadius: WP(10), paddingHorizontal: HP(1)
        }
    })
    async function onDel(item, index) {
        let temp = [...tasks];
        temp[index] = { ...item, showDel: !item?.showDel }
        setTasks(temp)
    }
    async function onDeleteTodo(item, index) {
        AlertService.confirm('Are You Sure?').then(async (r) => {
            if (r) {
                AlertService.show('Deleted Successfully')
                let temp = [];
                tasks?.map((k, ind) => {
                    if (ind != index)
                        temp?.push(k)
                })
                setTasks(temp)
                const res = await API_Calls.For_POST(ApiConsts.deleteTodo, { id: item?.id })
                if (res) {

                }
            }
        })
    }
    async function onCreate() {
        AlertService.confirm('Are You Sure?').then(async (r) => {
            if (r) {
                const res = await API_Calls.For_POST(ApiConsts.createTodo, { title: title })
                setTitle('')
                onGetAll()
                if (res) {

                }
            }
        })
    }
    async function onComplete(item) {
        AlertService.confirm('Are You Sure?').then(async (r) => {
            if (r) {
                const res = await API_Calls.For_POST(ApiConsts.getCompleted, { id: item?.id,completed:item?.completed?0:1 })
                onGetAll()
                if (res) {

                }
            }
        })
    }
    return (
        <View style={{}}>
            {tasks.map((item, index) =>
                <View key={index} style={{ marginVertical: HP(2) }}>
                    <View style={{ ...Styles.taskView }}>
                        <TouchableOpacity onPress={()=>{onComplete(item)}} style={{ ...GlobalStyles?.row }}>
                            {item?.completed ?
                            <Ionicons name={'checkbox'} color={palette?.nopPurple} size={22}/>
                            :
                            <Feather name={'square'} color={palette?.nopPurple} size={22}/>
                            }
                            <Text style={{ ...Styles.titleTxt, color: item?.completed == 1 ? palette?.purple : palette?.black, paddingHorizontal: WP(2) }}>{item?.title}</Text>
                        </TouchableOpacity>
                        {item?.showDel ?
                            <TouchableOpacity style={{ ...GlobalStyles?.card, ...GlobalStyles.shadow, borderRadius: WP(2) }} onPress={() => { onDeleteTodo(item, index) }}>
                                <Text style={{ ...GlobalStyles.regularTxt, color: 'red' }}>Delete</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { onDel(item, index) }}>
                                <Entypo name={'dots-three-horizontal'} color={palette?.labelGray} size={22}/>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            )}
            <View style={{ ...Styles.inpView }}>
                <TextInput value={title} placeholderTextColor={palette?.labelGray} style={{ paddingHorizontal: WP(3), ...GlobalStyles.regularTxt }} onChangeText={(e) => { setTitle(e) }} placeholder={'Add your todo...'} />
            </View>
            {title?.trim() != "" &&
                <TouchableOpacity style={{ ...GlobalStyles?.card, ...GlobalStyles.shadow, borderRadius: WP(2), marginTop: HP(3), alignSelf: 'center' }} onPress={() => { onCreate() }}>
                    <Text style={{ ...GlobalStyles.regularTxt, color: 'red' }}>Save</Text>
                </TouchableOpacity>
            }
        </View>
    )
}
export default TaskView;