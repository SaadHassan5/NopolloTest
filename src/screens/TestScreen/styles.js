import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { palette } from '../../assets/config/colors'
import { HP, WP } from '../../assets/config/screen-ratio'
import { GlobalStyles } from '../../global/globalStyles'

export const NopolloStyles = StyleSheet.create({
    progressView: {
        // alignItems:'center',
        justifyContent: "center",
        // flex: 1, 
        paddingHorizontal: WP(5)
    },
    taskTxt: {
        ...GlobalStyles?.boldTxt, fontSize: 22, paddingTop: HP(2)
    },
}
)