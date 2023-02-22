import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { GlobalStyles } from '../../global/globalStyles';

const ProgressBarView = ({ props, sty = {},tasks=0,showTasks=0 }) => {
    const Styles = StyleSheet.create({
        progressView: {
            backgroundColor: palette.nopolloRed,
            paddingVertical: HP(2),
            paddingHorizontal: WP(5),borderRadius:WP(2),
            // alignSelf:'center'
        },
        progressTxt:{
            ...GlobalStyles.boldTxt,color:'#fff',paddingBottom:HP(2),fontSize:23
        },
        taskTxt:{
            ...GlobalStyles.mediumTxt,color:'#EBB9B8',fontSize:14,paddingVertical:HP(2)
        }
    })
    return (
        <View style={{ ...Styles.progressView }}>
            <Text style={{ ...Styles.progressTxt}}>Progress</Text>
            <ProgressBar progress={tasks} style={{ width: WP(80), height: HP(1), borderRadius: WP(2) }} color={palette?.white} />
            <Text style={{ ...Styles.taskTxt}}>{showTasks} Completed</Text>
        </View>
    )
}
export default ProgressBarView;