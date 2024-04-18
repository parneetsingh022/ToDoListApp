import { View, Text, StyleSheet } from "react-native"
import themeColors from "../Colors"

export default function Header(){
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Categories</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        marginLeft:22,
        marginRight:22,
        marginTop:20,
        borderBottomWidth: 1,
        borderBottomColor: themeColors.borderColor,
        paddingBottom:5,
    },
    headerText:{
        fontSize:25,
        fontWeight:"bold",
        color: themeColors.secondaryText,
    }
})